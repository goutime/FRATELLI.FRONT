import { Alert, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import registerStyles from './register.module.css';
import { submitRegister } from '../services/auth'


function Register() {

  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: ""
  })

  const [open, setOpen] = useState(false)


  const [wrongData, setWrongData] = useState({
    status: true,
    infoText: ''
  })


  const handleForm = e => {
    const tempData = { ...registerData }
    tempData[e.target.id] = e.target.value
    setRegisterData(tempData)
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  
  const register = () => {
    submitRegister({ registerData, setRegisterData, setWrongData, setOpen })
  }

  return (
    <div className={registerStyles.container}>
            <section className={registerStyles.section}>
                  <Stack spacing={1} className={registerStyles.card}>
                    
                    <Typography component="h5" fontWeight={300}>
                      CREAR USUARIO
                    </Typography>

                    <img
                      src={require("./images/fratelli.png")}
                      alt="logo"
                      height={100}
                    />
                    
                    <TextField id="userName" onChange={e => handleForm(e)} value={registerData.userName} label="Solo su Nombre" variant="outlined" />
                    
                    <TextField id="email" onChange={e => handleForm(e)} value={registerData.email} label="Su Email" variant="outlined" />
                    
                    <TextField id="password" onChange={e => handleForm(e)} value={registerData.password} label="Cree Contraseña" variant="outlined" />
                    
                    <button variant="text" className="btn btn-success btn-lg" onClick={() => { register() }}>REGISTRATE</button>
                    
                    <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                      <Alert onClose={handleClose} severity={wrongData.status ? "error" : "success"} sx={{ width: '100%' }}>
                        {wrongData.infoText}
                      </Alert>

                    </Snackbar>
                    
                  </Stack>
            </section>
    </div>
  )
}

export default Register