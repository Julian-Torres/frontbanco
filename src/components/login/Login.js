import React, {useState} from "react";
import Swal from 'sweetalert2';
import { getAuth } from '../../services/getAuth'

const Login = () => {

    const [valoresForm, setValoresForm] = useState({});
    const {email='', contrasena=''} = valoresForm;


    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setValoresForm({...valoresForm,[name]: value})
    }

    const clickGetAuth = async (e)=>{
        e.preventDefault();
        try{
            Swal.fire({
              allowOutsideClick: false,
              text: 'Cargando...'
              });
              Swal.showLoading();

              const { data } = await getAuth(email, contrasena);
              localStorage.setItem("token", data);
              console.log(data);
            
              Swal.close();
              window.location.pathname = '/home'; 
            
            
          }catch(error){
            console.log(error);
            Swal.close();
          }
    }

    return <>
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input  type="text" className="login__input" 
                                    name="email" placeholder="Usuario / Correo"
                                    onChange={handleOnChange}/>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input  type="password" className="login__input" 
                                    name="contrasena" placeholder="Contraseña"
                                    onChange={handleOnChange}/>
                        </div>
                        <button className="button login__submit" onClick={clickGetAuth}>
                            <span className="button__text">Ingresar</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1">

                    <img src="https://1000marcas.net/wp-content/uploads/2020/07/logo-Citibank.jpg" id="icon" alt="User Icon" />
                    </span>
                </div>		
            </div>
        </div>
    </>
}

export {
    Login
}