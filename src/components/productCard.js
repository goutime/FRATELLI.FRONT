import React from 'react'
import {Grid} from "@mui/material"
import cardStyle from "./productCard.module.css";

function ProductCard(props) {


    const { product } = props
    return (
        <div className={cardStyle.container}>

            <Grid className={cardStyle.cajaC}>


                <a className={cardStyle.caja} href={'http://localhost:3000/detail/' 
                            + product.id + '/' + product.subCategory.name}>
                <div className={cardStyle.cabezaTitulo}>
                    <h4 className={cardStyle.neon}>{product.name}</h4>
                </div>                      
                <h4 className={cardStyle.cabezaTitulo2}>{product.subCategory.name}</h4>
                <div className={cardStyle.cuerpo2}>
                    <div>
                        <img src={product.image} alt='logo'/>
                    </div>
                </div>
                
                </a>
            </Grid>

        </div>
    )
}

export default ProductCard