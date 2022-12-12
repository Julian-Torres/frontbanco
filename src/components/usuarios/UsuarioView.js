import React, { useState, useEffect } from 'react'
import { getUsuarios } from "../../services/usuarioService";
import { UsuarioList } from "./UsuarioList";
import { UsuarioNew } from "./UsuarioNew";
import Swal from "sweetalert2";

export const UsuarioView = () => {

  const [usuarios, setUsuarios] = useState([])
  const[openModal,setOpenModal]=useState(false)

  const listarUsuarios = async () => {
    try {
      Swal.fire({
        text: 'CARGANDO...',
        allowOutsideClick:false
      })
      const { data } = await getUsuarios()
      console.log(data);
      setUsuarios(data)
      Swal.close()
    } catch (error) {
      console.log(error);
      Swal.close()
    }
  }

  useEffect(() => {
    listarUsuarios()
  }, [])

  const handleOpenModal=()=>{
    setOpenModal(!openModal)
  }

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
            usuarios.map((usuario) => {
              return <UsuarioList key={usuario._id} usuario={usuario}/>    
            })
          }
        </tbody>
      </table>
      {
        openModal ? <UsuarioNew 
                      handleOpenModal={handleOpenModal}
                      listarUsuarios={listarUsuarios}/>:
        <button type="button" className="btn btn-dark fab" onClick={handleOpenModal}>
          <i className="fa-plus fa-solid "></i>
        </button>
      }
    </div >
  )
}
 