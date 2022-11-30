import React, {useState} from "react";

function Login() {

    const[valoresForm,setValoresForm] =useState({})
    const[login,setLogin] =useState([])

    const handleOnChange = (e)=>{
        //console.log(e.target.name,e.target.value);
        const {name,value} =e.target
        setValoresForm({...valoresForm,[name]: value})

    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setLogin([...login, valoresForm])
    }


    return <>
        <h2>Login</h2>
        <form onSubmit={(e)=> handleOnSubmit(e)}>
            <label>Email</label>
            <input 
                type="email"
                onChange={(e)=>handleOnChange(e)}
                name="email"
                required/>
            <label>Contraseña</label>
            <input 
                type="password"
                onChange={(e)=>handleOnChange(e)}
                name="contrasena"
                required/>
            <button> LOGIN </button>
        </form>
    </>
}

export {
    Login
}