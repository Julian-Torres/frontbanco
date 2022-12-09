import React, { useState, useEffect } from 'react'
import { getUsuarios } from "../../services/usuarioService";

export const UsuarioView = () => {

  const [usuarios, setUsuarios] = useState([])

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios()
      console.log(data);
      setUsuarios(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios()
  }, [])

  return (
    <div className="container-fluid">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Tipo Doc</th>
            <th scope="col">Doc</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((usuario) => (
              <tr key={usuario._id} >
                <td>{usuario.tipoDocumento}</td>
                <td>{usuario.documento}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.estado}</td>
                <td>botones de editar y eliminar</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div >
  )
}
