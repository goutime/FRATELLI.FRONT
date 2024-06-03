import { IconButton, Badge} from '@mui/material';
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ModalFooter } from 'react-bootstrap';
import loginStyles from "./login.module.css";


const Footer = () => {

  
  return (    
    <ModalFooter className="text-center text-lg-start bg-success text-muted p-4">

      <section className="justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5">
          <span className="text-white">Comunicate con nosotros (:</span>
        </div>
      </section>

      <section>
        <div className="text-center text-md-start mt-5">
          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                <i className="fas fa-gem me-3"></i>Dato Importante
              </h6>
              <p className="text-white">
                Creamos esta aplicación para que los clientes
                gestionen sus pedidos.
                Y así poder agilizar sus ordenes de compra de forma simple.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="fw-bold mb-4 text-white">
                Descubre mas aquí ó Conversa con un asistente.
              </h6>

              <IconButton target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/fratelliachupallas/?locale=es_LA&_rdc=1&_rdr">
                <FacebookIcon height={28} color="warning"/>
              </IconButton>

              <IconButton target="_blank" rel="noopener noreferrer" href="https://wa.me/56986813158/?text=Hola,%20Muy%20buenas%20tardes.%20Le%20hablo%20para%20hacerle%20algunas%20consultas" size="large">
                <Badge>
                  <WhatsAppIcon color="warning" height={25}/>
                </Badge>
              </IconButton>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">ESCRÍBENOS</h6>
              <p className="text-white">
                <i className="fas fa-envelope me-3"></i>
                pizzeriafratellivina@gmail.com
              </p>
              <p className="text-white"><i className="fas fa-phone me-3"></i> +56986813158 </p>
            </div>
            
          </div>
        </div>
      </section>

      <section>
      
        <div className={loginStyles.sec2}>{/*este es el div del quienes somos -- container-fluid*/}
          <h2 className="text-center p-4 text-white">Quienes somos?</h2>

          <p className="text-center text-white">
          Fratelli pizzeria🍕 Es un negocio familiar con más de 25 años de 
          experiencia en pizza y pastas de Italia y europa. ubicados en 👇
          </p>

          <p className="text-center text-white">
          Achupallas 
          ( Luis Ayala 73 paradero 6 y medio.) y Miraflores (Av frei 3636) Pizza artesanal
           a la piedra 🍕🌯😋.
          </p>   
   

        </div>{/*este es el div del quienes somos*/}

      </section>

      <section>
        <div className="text-center p-4 text-white">
          © Todos los derechos reservados Copyright: <a className="text-reset fw-bold" href="https://frontathomlab-production.up.railway.app/">  wwww.fratelli.cl</a>
        </div>
      </section>

    </ModalFooter>
  );
};

export default Footer;