import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import React, {useEffect} from 'react';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {getAllCategories} from "../services/category";
import { createSubCategory } from '../services/category';

function SubCategoryForm(props) {
    const { openModal2, setOpenModal2, edit, setProductFeedback2, setSubCategory, subCategory, setRefresh } = props;
    
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState({});

    useEffect(() => {
        getAllCategories({ setCategoryList })
      }, [])
      
    

    const handleProductForm = e => {
        setSubCategory({ ...subCategory, [e.target.id]: e.target.value });
    }
    
    const handleProductCategory = e => {
        setCategory(e.target.value);
    }

    const handleCloseModal2 = () => {
        setOpenModal2(false)
        setSubCategory(edit ? subCategory : { image: "", name: "", category: ""})
    };

    const saveModalSubCategory = (event) => {
        setRefresh(false);
        event.preventDefault();
        
      
        // Utiliza tus funciones para actualizar el producto
        handleProductForm({ target: { id: 'image', value: subCategory.image } });
        handleProductForm({ target: { id: 'name', value: subCategory.name } });      
        handleProductCategory({ target: { value: category } });
      
        // Construir el objeto productData
        const subCategoryData = {
            image: subCategory.image,
            name: subCategory.name,
          category: category,
          // otros campos del producto si los hay
        };
      
        if (edit) {
            subCategoryData.id = subCategory.id;
        }
      
        if (!subCategory.category) {
            setSubCategory({ ...subCategory, category: null });
        }
        console.log(subCategoryData);
      
        createSubCategory(subCategoryData)
          .then((response) => {
            console.log(response);
            setSubCategory(subCategoryData);
            setProductFeedback2({ show: true, status: true, infoText: "Guardado" });
            handleCloseModal2();
            setRefresh(true);
          })
          .catch((error) => {
            setProductFeedback2({ show: true, status: false, infoText: "No guardado" });
          });
      };

    return (
        <Modal
            open={openModal2}
            onClose={handleCloseModal2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box 
            onSubmit={saveModalSubCategory} component="form" sx={{
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
                        {edit ? "Editar subCategoria" : "Nueva sub Categoría"}
                    </Typography>

                    <TextField 
                        required
                        id="image"
                        label="Imágen"
                        onChange={e => handleProductForm(e)}
                        value={subCategory.image}
                    />

                    <TextField
                        required
                        id="name"
                        label="Nombre"
                        name="name"
                        onChange={e => handleProductForm(e)}
                        value={subCategory.name}
                    />
                    

                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="category"
                        value={category}
                        label="Category"
                        input={<OutlinedInput label="Name" />}
                        onChange={e => handleProductCategory(e)}
                    >
                                {categoryList.map(categoryItem =>

                                     <MenuItem 
                                     key={categoryItem.id} 
                                     value={categoryItem}>{categoryItem.name}
                                     </MenuItem>  
                                
                                )
                                }
                    </Select>
                    

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
                        onClick={handleCloseModal2}>
                        Cancelar
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default SubCategoryForm;