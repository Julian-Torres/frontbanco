import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { get1Usuarios,putUsuarios } from "../../services/usuarioService";
import Swal from "sweetalert2";

export const UsuarioUpdate = () => {

    const { usuarioId = '' } = useParams()
    const [usuario, setUsuario] = useState({})
    const [valoresForm, setValoresForm] = useState({})

    const { nombre = '', apellido = '', tipoDocumento = '', documento = '', telefono = '', email = '', rol = '', contrasenaAntigua = "", contrasenaNueva = "", estado = 'Activo' } = valoresForm

    const getUsuario = async () => {
        try {
            const { data } = await get1Usuarios(usuarioId)
            setUsuario(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsuario()
    }, [usuarioId]) 
    
    useEffect(()=>{
            setValoresForm({
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                tipoDocumento: usuario.tipoDocumento,
                documento: usuario.documento,
                telefono: usuario.telefono, 
                email: usuario.email,
                rol: usuario.rol,
                contrasenaAntigua: '',
                contrasenaNueva: '',
                estado: usuario.estado
            })
    },[usuario])

    const handleOnChange = ({ target }) => {
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
          const usuario={
              nombre, apellido, tipoDocumento, documento, telefono, email, rol, contrasenaAntigua,contrasenaNueva, estado
          }
          console.log(usuario)
              Swal.fire({
                  title: 'Guardado',
                  icon: 'success',
                  confirmButtonText: 'Aceptar'
                })
          try {
              const {data} = await putUsuarios(usuarioId,usuario)
         } catch (error) {
             console.log(error)
              Swal.close()
          }
    }

    return (
        <div className='sidebar container-fluid'>
            <div className='row'>
                <div className='sidebar-header col'>
                    <h1>Editar Usuario</h1>
                </div>
            </div>
            <div className='row'>
                <hr />
            </div>
            <form
                onSubmit={(e) => handleOnSubmit(e)}
            >
                <div className='row'>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Nombre</label>
                            <input type="text" name="nombre" className="form-control text-light bg-secondary"
                                value={nombre} onChange={(e) => handleOnChange(e)} required />
                        </div>
                    </div>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Apellido</label>
                            <input type="text" name="apellido" className="form-control text-light bg-secondary"
                                value={apellido} onChange={(e) => handleOnChange(e)} required />
                        </div>
                    </div>
                    <div className='col'>
                        <div class="mb-3">
                        <fieldset disabled>
                            <label className="form-label text-light">Tipo Documento</label>
                            <select className="form-select text-light bg-dark" name="tipoDocumento"
                                value={tipoDocumento} onChange={(e) => handleOnChange(e)} required>
                                <option value="">--SELECCIONA--</option>
                                <option value="CC">CC</option>
                                <option value="CE">CE</option>
                                <option value="NIT">NIT</option>
                                <option value="TI">TI</option>
                            </select>
                            </fieldset>
                        </div>

                    </div>
                    <div className='col'>
                        <div class="mb-3">
                        <fieldset disabled>
                            <label className="form-label text-light">Documento</label>
                            <input type="number" name="documento" className="form-control text-light bg-dark"
                                value={documento} onChange={(e) => handleOnChange(e)} required />
                                </fieldset>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Telefono</label>
                            <input type="number" name="telefono" className="form-control text-light bg-secondary"
                                value={telefono} onChange={(e) => handleOnChange(e)} required />
                        </div>
                    </div>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Correo</label>
                            <input type="email" name="email" className="form-control text-light bg-secondary"
                                value={email} onChange={(e) => handleOnChange(e)} required />
                        </div>
                    </div>
                    <div className='col'>
                        <div class="mb-3">
                        <fieldset disabled>
                            <label className="form-label text-light">Rol</label>
                            <select className="form-select text-light bg-dark" name="rol"
                                value={rol} onChange={(e) => handleOnChange(e)} required>
                                <option value="">--SELECCIONA--</option>
                                <option value="Admin">Admin</option>
                                <option value="Cliente">Cliente</option>
                                <option value="Asesor">Asesor</option>
                            </select>
                            </fieldset>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Contrseña</label>
                            <input type="password" name="contrasenaAntigua" className="form-control text-light bg-secondary"
                                value={contrasenaAntigua} onChange={(e) => handleOnChange(e)} minLength={6} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Confirmacion</label>
                            <input type="password" name="contrasenaNueva" className="form-control text-light bg-secondary"
                                value={contrasenaNueva} onChange={(e) => { handleOnChange(e) }} minLength={6} />
                        </div>
                    </div>
                    <div className='col'>
                        <div class="mb-3">
                            <label className="form-label text-light">Estado</label>
                            <select className="form-select text-light bg-secondary" name="rol"
                                value={estado} onChange={(e) => handleOnChange(e)} required>
                                <option value="">--SELECCIONA--</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                        </div>
                    </div>
                    <div className='col' />
                    <div className='col' />
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
