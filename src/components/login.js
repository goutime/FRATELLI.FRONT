import {
  Grid,
  Alert,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";

import loginStyles from "./login.module.css";


import { submitLogin } from "../services/auth";
import Register from "./register"
import { getUserDetails } from '../services/auth'
import ProductForm from './productForm'
import SubCategoryForm from './subCategoryForm';
import ProductSearch from './productSearch';
import { getAllProducts } from '../services/product'
import { getAllCategories } from '../services/category'

function Login() {
  const [roles, setUserRole] = useState([{}])
  const [refresh, setRefresh] = useState(false) //este componente es para el formulario de creacion de productos.
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [product, setProduct] = useState({ name: "", description: "", subCategory: "", image: "" })
  const [subCategory, setSubCategory] = useState({ image: "", name: "", category: "" })
  const [showProductFeedback, setProductFeedback] = React.useState({ show: false, status: false, infoText: '' })
  const [showProductFeedback2, setProductFeedback2] = React.useState({ show: false, status: false, infoText: '' })
  //const [products, setProducts] = useState([]);

  const [productList, setProductList] = useState([]);


  const [categoryList, setCategoryList] = useState([]) //Aquí tengo mi variable y mi función.

  useEffect(() => {
    getUserDetails({ setUserRole })
    getAllCategories({ setCategoryList })
    getAllProducts({ setProductList })
    //getBestProducts({ setBestProductList })
  }, [refresh])


  const handleOpenModal = () => setOpenModal(true) //esto es lo que habre el formulario. para ingresar un producto.

  const handleOpenModal2 = () => setOpenModal2(true)

  const closeProductFeedback = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }
    setProductFeedback({ show: false });
  };

  const closeProductFeedback2 = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }
    setProductFeedback2({ show: false });
  };



  //var navigate = useNavigate();

  const [loginData, setLoginData] = useState({ userName: "", password: "" });
  const [wrongCredentials, setWrongCredentials] = useState({
    wrongData: false,
    infoText: "",
  });
  const [open, setOpen] = useState(false);


  const handleForm = (e) => {
    const tempData = { ...loginData };
    tempData[e.target.id] = e.target.value;
    setLoginData(tempData);
  };




  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };








  return (
    <div className={loginStyles.container}>


      <div className={loginStyles.sec}>{/*RELACIONADOS AQUI*/}
        <h1
          className={loginStyles.nombre}
        >
          QUE BUSCAS ?😋:

        </h1>
        <ProductSearch onSearchSuccess={productList} />

        <div className="d-flex justify-content-center align-items-center">
          <h2 className={loginStyles.titulo}>
            CATEGORIAS
          </h2>
        </div>

        <div>
          {roles.length > 1 ?
            <div>
              <button className="m-3 btn btn-success btn-lg" variant="text"
                id="button" onClick={handleOpenModal}>
                Añadir nuevo producto
              </button>

              <button className="m-3 btn btn-success btn-lg" variant="text"
                id="button" onClick={handleOpenModal2}>
                Añadir nueva Sub Categoria
              </button>

            </div>



            : null}
        </div>


        {
          /*
            <div>
            {roles.length > 1 ? <button className="m-3 btn btn-success btn-lg" variant="text"
              id="button2" onClick={handleOpenModal2}>
              Añadir nueva Sub Categoria
            </button> : null}
          </div>
          */
        }

        <Grid className="row">
          {categoryList.map(categoryItem => (
            <div className="col-lg-4">

              <a href={'http://localhost:3000/subcategory/' + categoryItem.name}
                className={loginStyles.caja} key={categoryItem.id}>

                <div className={loginStyles.cabezaTitulo}>
                  <h4 loginStyles={loginStyles.neon}>{categoryItem.name}</h4>
                </div>

                <div loginStyles={loginStyles.cuerpo}>
                  <div>
                    <img src={categoryItem.image} alt="img" />
                  </div>
                </div>
              </a>

            </div>
          ))}
        </Grid>





        <Snackbar open={showProductFeedback.show} autoHideDuration={4000} onClose={closeProductFeedback}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
          <Alert onClose={closeProductFeedback} severity={showProductFeedback.status ? "success" : "error"}
            sx={{ width: '100%' }}>
            {showProductFeedback.infoText}
          </Alert>
        </Snackbar>

        <Snackbar open={showProductFeedback2.show} autoHideDuration={4000} onClose={closeProductFeedback2}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
          <Alert onClose={closeProductFeedback2} severity={showProductFeedback2.status ? "success" : "error"}
            sx={{ width: '100%' }}>
            {showProductFeedback2.infoText}
          </Alert>
        </Snackbar>

        <ProductForm setRefresh={setRefresh} openModal={openModal} setOpenModal={setOpenModal}
          setProductFeedback={setProductFeedback} edit={false}
          setProduct={setProduct} product={product}
        />

        <SubCategoryForm setRefresh={setRefresh} openModal2={openModal2} setOpenModal2={setOpenModal2}
          setProductFeedback2={setProductFeedback2} edit={false}
          setSubCategory={setSubCategory} subCategory={subCategory} />







        <Stack
          spacing={2}
          className={loginStyles.card}
        >

          <Typography component="h5" fontWeight={200}>
            ACCESO DE USUARIO
          </Typography>

          <img
            src={require("./images/fratelli.png")}
            alt="logo"
            height={100}
          />

          <TextField
            id="userName"
            label="Usuario"
            variant="outlined"
            onChange={(e) => handleForm(e)}
            value={loginData.userName}
          />

          <TextField
            type="password"
            id="password"
            label="Contraseña"
            variant="outlined"
            onChange={(e) => handleForm(e)}
            value={loginData.password}
          />

          <button className="btn btn-success btn-lg" variant="text"
            onClick={() => {
              submitLogin({
                loginData,
                setWrongCredentials,
                setOpen,
              });
            }}
          >
            ACCEDE
          </button>

          <Snackbar
            open={open}
            autoHideDuration={1500}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {wrongCredentials.infoText}
            </Alert>

          </Snackbar>

        </Stack>
        <Register />

      </div>



    </div>
  );
}

export default Login;