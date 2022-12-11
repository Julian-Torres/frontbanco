import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { get1Usuarios } from "../../services/usuarioService";

export const UsuarioUpdate = () => {

    const {usuarioId =''}=useParams()
    console.log(usuarioId)

    const getUsuario=async()=>{
        try {
            const {data}= await get1Usuarios(usuarioId)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (()=>{
        getUsuario()
    },[usuarioId])

  return (
    <div>UsuarioUpdate</div>
  )
}
