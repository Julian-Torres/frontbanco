import React, { useState, useEffect } from 'react'
import { postUsuarios } from "../../services/usuarioService";
import  Swal  from "sweetalert2";

export const UsuarioNew = ({handleOpenModal,listarUsuarios}) => {

    const [valoresForm,setValoresForm]=useState({})
    const {nombre ='',apellido ='',tipoDocumento ='',documento ='',telefono ='',email ='',rol ='',contrasena ='',confirm ='',estado ='Activo'}=valoresForm

    const handleOnChange =({target})=>{
        const {name,value}=target
        setValoresForm({...valoresForm,[name]:value})
    }

    const handleOnSubmit=async (e)=>{
        e.preventDefault()
        const usuario={
            nombre, apellido, tipoDocumento, documento, telefono, email, rol, contrasena,confirm, estado
        }
        console.log(usuario)
            // Swal.fire({
            //     allowOutsideClick:false,
            //     text:"Cargando..."
            // })
            Swal.fire({
                title: 'Guardado',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })
        try {
            const {data} = await postUsuarios(usuario)
            console.log(data)
            handleOpenModal()
            listarUsuarios()
        } catch (error) {
            console.log(error)
            Swal.close()
        }
    }


  return (
    <div className='sidebar container-fluid'>
        <div className='row'>
            <div className='sidebar-header col'>
            <h1>Crear Usuario</h1>
                
                <button type="button" className="btn btn-dark " onClick={handleOpenModal}>
                <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
        </button>
            </div>
        </div> 
        <div className='row'>
            <hr/>
        </div>
        <form onSubmit={(e)=>handleOnSubmit(e)}>
            <div className='row'>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Nombre</label>
                        <input type="text" name="nombre" className="form-control text-light bg-secondary" 
                        value={nombre} onChange={(e)=>handleOnChange(e)} required/>
                    </div>                
                </div>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Apellido</label>
                        <input type="text" name="apellido" className="form-control text-light bg-secondary" 
                        value={apellido} onChange={(e)=>handleOnChange(e)} required/>
                    </div>
                </div>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Tipo Documento</label>
                        <select className="form-select text-light bg-secondary" name="tipoDocumento" 
                        alue={tipoDocumento} onChange={(e)=>handleOnChange(e)} required>
                            <option value="">--SELECCIONA--</option>
                            <option value="CC">CC</option>
                            <option value="CE">CE</option>
                            <option value="NIT">NIT</option>   
                            <option value="TI">TI</option>                        
                        </select>
                    </div>
                
                </div>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Documento</label>
                        <input type="number" name="documento" className="form-control text-light bg-secondary" 
                        value={documento} onChange={(e)=>handleOnChange(e)} required/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Telefono</label>
                        <input type="number" name="telefono" className="form-control text-light bg-secondary" 
                        value={telefono} onChange={(e)=>handleOnChange(e)} required/>
                    </div>                
                </div>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Correo</label>
                        <input type="email" name="email" className="form-control text-light bg-secondary" 
                        value={email} onChange={(e)=>handleOnChange(e)} required/>
                    </div>
                </div>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Rol</label>
                        <select className="form-select text-light bg-secondary" name="rol" 
                        value={rol} onChange={(e)=>handleOnChange(e)} required>
                            <option value="">--SELECCIONA--</option>
                            <option value="Admin">Admin</option>
                            <option value="Cliente">Cliente</option>
                            <option value="Asesor">Asesor</option>   
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Contrseña</label>
                        <input type="password" name="contrasena" className="form-control text-light bg-secondary" 
                        value={contrasena} onChange={(e)=>handleOnChange(e)}minLength={6} required/> 
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div class="mb-3">
                        <label className="form-label text-light">Confirmacion</label>
                        <input type="password" name="confirm" className="form-control text-light bg-secondary" 
                        value={confirm} onChange={(e)=>{handleOnChange(e)}} minLength={6} required/>
                    </div>
                </div>
                <div className='col'/>
                <div className='col'/>
                <div className='col'/>
            </div>
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary'>GUARDAR</button>
                </div>
            </div>
        </form>
    </div>
  )
}
 