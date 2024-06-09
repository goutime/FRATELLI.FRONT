import { getApiUrl } from './apiConfig'
import axios from 'axios'





export const submitLogin = (props) => {
    const { loginData, setWrongCredentials, navigate, setOpen } = props;
    const loginUrl = getApiUrl('auth/login');

    axios.post(loginUrl, loginData, { withCredentials: true })
        .then((response) => {
            if (response.status === 200) {
                navigate('/', { replace: false });
                window.scrollTo({ top: 0, behavior: 'smooth' });setTimeout(() => {
                    window.location.reload();
                  }, 500);




            }
        })
        .catch((error) => {
            setWrongCredentials({ wrongData: true, infoText: error.response.data.infoMessage });
            setOpen(true);
        });
};







/**
 * 
 
export const logout = ({ navigate }) => {
    const logoutUrl = getApiUrl('auth/logout');
  
    axios.get(logoutUrl, { withCredentials: true }).then(() => {
      navigate('/', { replace: false });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 500); // Adjust delay as needed
    });
  };





  export const submitLogin = (props) => {
  const { loginData, setWrongCredentials, navigate, setOpen } = props;
  const loginUrl = getApiUrl('auth/login');

  axios.post(loginUrl, loginData, { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        navigate('/', { replace: true });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    })
    .catch((error) => {
      setWrongCredentials({ wrongData: true, infoText: error.response.data.infoMessage });
      setOpen(true);
    });
};





export const submitLogin = (props) => {
    const { loginData, setWrongCredentials, navigate, setOpen } = props
    const loginUrl = getApiUrl('auth/login')
    axios.post(loginUrl, loginData, { withCredentials: true })
        .then(() => {
            navigate('/', { replace: false })
        }).catch(error => {
            setWrongCredentials({ wrongData: true, infoText: error.response.data.infoMessage })
            setOpen(true)
        })
}
 * 
 */















//separacion

export const submitRegister = (props) => {
    const { registerData, setRegisterData, setWrongData, setOpen } = props
    const registerUrl = getApiUrl('auth/register')
    axios.post(registerUrl, registerData).then(response => {
        setRegisterData({ userName: "", email: "", password: "" })
        setWrongData({ status: false, infoText: response.data.infoMessage })
        setOpen(true)
    }).catch(error => {
        console.log(error.response);
        setWrongData({ status: true, infoText: error.response.data.infoMessage })
        setOpen(true)
    })
}

//separacion

export const getUserDetails = ({ setUserRole }) => {
    const userDetailsUrl = getApiUrl('auth/details')
    axios.get(userDetailsUrl, { withCredentials: true }).then(userDetails => {
        setUserRole(userDetails.data.roles)
        const cartCountUrl = getApiUrl(`shoppingList/count/${userDetails.data.id}`)
        axios.get(cartCountUrl, { withCredentials: true }).then(response => {
            localStorage.setItem("number", response.data.toString())
            window.dispatchEvent(new Event('storage'))
        })
    }).catch(error => {
        if (error.response && error.response.status === 500) {
            console.error("error gonzalo", error);
        }
        else {
            console.error("error 2 gonzalo", error);
        }
    })
}

//separacion
export const logout = ({ navigate }) => {
    const logoutUrl = getApiUrl('auth/logout');
  
    axios.get(logoutUrl, { withCredentials: true }).then(() => {
      navigate('/', { replace: false });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 500); // Adjust delay as needed
    });
  };


/*

export const logout = ({ navigate }) => {
    const logoutUrl = getApiUrl('auth/logout')
    axios.get(logoutUrl, { withCredentials: true }).then(() => {
        navigate('/', { replace: true })
    })
}


export const logout = ({ navigate }) => {
  const logoutUrl = getApiUrl('auth/logout');

  axios.get(logoutUrl, { withCredentials: true }).then(() => {
    navigate('/', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reload the page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 500); // Adjust delay as needed
  });
};



*/