import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'; /* Input */
import React, {useEffect} from 'react'
import { createProduct } from '../services/product'
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {getAllSubCategories} from "../services/category";

function ProductForm(props) {
    const { openModal, setOpenModal, edit, setProductFeedback, setProduct, product, setRefresh } = props;
    /*const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);*/
    
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [subCategory, setSubCategory] = useState({});

    useEffect(() => {
        getAllSubCategories({ setSubCategoryList })
      }, [])
      
    

    const handleProductForm = e => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    }
    
    const handleProductSubCategory = e => {
        setSubCategory(e.target.value);
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setProduct(edit ? product : { name: "", price: 0, description: "", subCategory: "", image: "", pdf: "" })
    };

    const saveModalProduct = (event) => {
        setRefresh(false);
        event.preventDefault();
        
      
        // Utiliza tus funciones para actualizar el producto
        handleProductForm({ target: { id: 'name', value: product.name } });
        handleProductForm({ target: { id: 'price', value: product.price } });
        handleProductForm({ target: { id: 'description', value: product.description } });
        handleProductForm({ target: { id: 'image', value: product.image } });
        handleProductForm({ target: { id: 'pdf', value: product.pdf } });
      
        handleProductSubCategory({ target: { value: subCategory } });
      
        // Construir el objeto productData
        const productData = {
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          pdf: product.pdf,
          subCategory: subCategory,
          // otros campos del producto si los hay
        };
      
        if (edit) {
          productData.id = product.id;
        }
      
        if (!product.subCategory) {
            setProduct({ ...product, subCategory: null });
        }
        console.log(productData);
      
        createProduct(productData)
          .then((response) => {
            console.log(response);
            setProduct(productData);
            setProductFeedback({ show: true, status: true, infoText: "Guardado" });
            handleCloseModal();
            setRefresh(true);
          })
          .catch((error) => {
            setProductFeedback({ show: true, status: false, infoText: "No guardado" });
          });
      };

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box 
            onSubmit={saveModalProduct} component="form" sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                bgcolor: 'background.paper',
                border: '0px solid #000',
                borderRadius: '5px',
                boxShadow: 24,
                p: 2,
            }}>
                <Stack spacing={1}>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {edit ? "Editar producto" : "Nuevo producto"}
                    </Typography>

                    <TextField
                        required
                        id="name"
                        label="Nombre"
                        name="name"
                        onChange={e => handleProductForm(e)}
                        value={product.name}
                    />

                    <TextField autoComplete="off"
                        required
                        id="price"
                        label="Precio"
                        type="number"
                        onChange={e => handleProductForm(e)}
                        value={product.price}
                    />
                    

                    <InputLabel id="demo-simple-select-label">Sub Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="subCategory"
                        value={subCategory}
                        label="category"
                        input={<OutlinedInput label="Name" />}
                        onChange={e => handleProductSubCategory(e)}
                    >
                                {subCategoryList.map(categoryItem =>

                                     <MenuItem 
                                     key={categoryItem.id} 
                                     value={categoryItem}>{categoryItem.name}
                                     </MenuItem>  
                                
                                )
                                }
                    </Select>

                    <TextField
                        required
                        id="description"
                        label="Descripción"
                        name="description"
                        multiline
                        rows={5} // Puedes ajustar este número según tus necesidades
                        variant="outlined"
                        onChange={e => handleProductForm(e)}
                        value={product.description}
                    />

                    <TextField 
                        required
                        id="image"
                        label="Imágen"
                        onChange={e => handleProductForm(e)}
                        value={product.image}
                    />

                    <TextField 
                        required
                        id="pdf"
                        label="pdf"
                        onChange={e => handleProductForm(e)}
                        value={product.pdf}
                    />
                    

                    <Button className='btn'
                        variant="contained"
                        id="button"
                        type="submit">
                        Guardar
                    </Button>

                    <Button
                        variant="outlined"
                        id="button"
                        color="error"
                        onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default ProductForm