import React from 'react'
import { deleteUsuarios } from "../../services/usuarioService";

export const UsuarioList = (props) => {

  const { usuario } = props
  const handleOnClick = (e) => {
    e.preventDefault()
    window.location.href = ('http://localhost:3000/usuarios/' + usuario._id)

  }
   const confimDelete = async (e) => {
     e.preventDefault()
     const alerta = window.confirm("seguro que quieres eliminar a "+usuario.nombre+"?")
     if (alerta === true) {
       //window.alert("Has clickado OK")
       try {
         const { data } = await deleteUsuarios(usuario._id)
         window.location.reload(false);       
       } catch (error) {
         console.log(error);
       }
     } else {

     }
   }

  return (
    <tr>
      <td>{usuario.tipoDocumento}</td>
      <td>{usuario.documento}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.apellido}</td>
      <td>{usuario.telefono}</td>
      <td>{usuario.email}</td>
      <td>{usuario.rol}</td>
      <td>{usuario.estado}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleOnClick}>Editar</button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-danger"
          onClick={confimDelete}
         >Eliminar</button>
      </td>
    </tr>
  )
}
