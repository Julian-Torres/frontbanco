import React from 'react'

export const UsuarioList = (props) => {

    const {usuario}=props
    const handleOnClick=(e)=>{
      e.preventDefault();
      window.location.href=('http://localhost:3000/usuarios/'+usuario._id)

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
                  <button type="button" className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
  )
}
