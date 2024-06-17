import { Alert, Grid, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getUserDetails } from '../services/auth'
import ProductForm from './productForm'

import { useParams } from "react-router-dom";
import { getProductsBySubCategory } from '../services/product'//, getBestProducts
import { addToCart } from '../services/shoppingCart'
import productListStyle from './productList.module.css'
import Login from "./login"




function ProductList()
{
  const {name} = useParams();
  const [roles, setUserRole] = useState([{}])
  const [productList, setProductList] = useState([]) //Aquí tengo mi variable y mi función.
  //const [bestProductList, setBestProductList] = useState([])
  const [product, setProduct] = useState({ name: "", description: "", subCategory: "", image: "" })
  const [refresh, setRefresh] = useState(false) //este componente es para el formulario de creacion de productos.
  const [openModal, setOpenModal] = useState(false)
  const [showProductFeedback, setProductFeedback] = React.useState({ show: false, status: false, infoText: '' })

  const [mostrara, setMostrara] = useState(false);

  const mostrarAvisoa = () => {
    setMostrara(true);
  };

  const ocultarAvisoa = () => {
    setMostrara(false);
  };

  useEffect(() => {
    getUserDetails({ setUserRole })
    getProductsBySubCategory(name).then(data => {
      setProductList(data);
    })
    //getBestProducts({ setBestProductList })
  }, [refresh, name])

  
  const handleOpenModal = () => setOpenModal(true) //esto es lo que habre el formulario. para ingresar un producto.

  const closeProductFeedback = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }
    setProductFeedback({ show: false });
  };

  const addProduct = (productToAdd, amountToAdd) => {
    addToCart({amountToAdd, productToAdd, setProductFeedback})
  }

  return(
    <div className={productListStyle.container}>

          <div className={productListStyle.title_container}>

              <div>
                {roles.length > 1 ? 
                <button fontSize={100} 
                  component="h2" ml={8} fontWeight={700}
                  color='success'
                  className="btn btn-success btn-lg m-4" 
                  id="button" onClick={handleOpenModal}>
                  Añadir nuevo producto
                </button> : null}
              </div>

              <Typography className={productListStyle.titulo} variant="span" component="h2"
               ml={6} m={2}>
                Fratelli A Tu Servicio
              </Typography>

          </div>

          <Typography className={productListStyle.titulo2} 
            variant="span" component="h2" ml={6}>
              Nuestras Pizzas
            </Typography>

          
          <div className="container">
            <div className="row">
              <div className="col-12 text-center my-4">
                <button className="btn btn-success btn-lg" 
                onClick={() => window.history.back()}>
                  Volver Atrás
                </button>
              </div>
            </div>
          </div>

          <Grid className="row">
            {productList.map(productItem =>

              <Grid onMouseOver={mostrarAvisoa} onMouseOut={ocultarAvisoa}
              key={productItem.id} className="col-md-4 col-sm-6" >
              
                      {mostrara && (
                        <div className={productListStyle.alert} role="alert">
                          Haga Clic.
                        </div>
                      )}
                      <ProductCard product={productItem} />
                

                      <button
                      className={productListStyle.addButton}
                      onClick={() => {
                        addProduct(productItem, 1)
                        }}>
                        <AddShoppingCartIcon />              
                      </button>
                
              </Grid>)
            }
          </Grid>

          <br></br>

          <Snackbar open={showProductFeedback.show} autoHideDuration={7000} 
          onClose={closeProductFeedback}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
            <Alert onClose={closeProductFeedback} 
            severity={showProductFeedback.status ? "success" : "error"} 
            sx={{ width: '500%' }}>
              {showProductFeedback.infoText}
            </Alert>
          </Snackbar>
          
          
          <ProductForm setRefresh={setRefresh} openModal={openModal} setOpenModal={setOpenModal}
          setProductFeedback={setProductFeedback} edit={false}
          setProduct={setProduct} product={product}/>

          <Login/>
          
    </div>
  )
}

export default ProductList