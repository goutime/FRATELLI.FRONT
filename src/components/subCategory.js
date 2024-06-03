import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material"
import subCategoryStyle from "./subCategory.module.css";
import { useParams } from "react-router-dom";
import { getSubCategoriesByCategoryName } from '../services/category'


function SubCategory() {
  const [subCategoryList, setSubCategoryList] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    getSubCategoriesByCategoryName(name.toString()).then(data => {
      setSubCategoryList(data);
    })
  }, [name]);

  return (
    <div className={subCategoryStyle.container}>

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

      <div className={subCategoryStyle.container}>

        <div className="d-flex justify-content-center align-items-center">
          <Typography className={subCategoryStyle.subCategorias} variant="span" component="h2" ml={1}>
            SUB CATEGORIAS
          </Typography>
        </div>

        <Grid className="row">
          {subCategoryList.map(subCategoryList =>
          <div className="col-lg-6">
            <a href={'http://localhost:3000/listado/'
              + subCategoryList.name}
              className={subCategoryStyle.caja} key={subCategoryList.id}>

              <div className={subCategoryStyle.cabezaTitulo}>
                <h4 className={subCategoryStyle.neon}>{subCategoryList.name}</h4>
              </div>

              <div className={subCategoryStyle.cuerpo}>
                <img src={subCategoryList.image} alt="img" />
              </div>

            </a>    
          </div>
          )
          }
        </Grid>

      </div>

    </div>
  );
}

export default SubCategory;
