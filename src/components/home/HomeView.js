import React,{useState,useEffect} from 'react'

export const HomeView = () => {

  const [nombre, setNombre] =useState('')
  const [rol, setRol] =useState('')
  const [token, setToken] =useState('')

  const getToken =()=>{
    return localStorage.getItem("token")
  }

  const getNombre =()=>{
    return localStorage.getItem("nombre")
  }
  const getRol =()=>{
    return localStorage.getItem("rol")
  }

  useEffect(() => {
    setNombre(getNombre())
    setRol(getRol())
    setToken(getToken())

  }, [])  
  
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

        <div className="carousel-item active">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-2">
                <div className="slider_detail-box">
                  <h1>
                    Bienvenido {nombre}
                  </h1>
                  <p>
                    En esta página podrás realizar diferentes operaciones en el sistema
                    bancario de acuerdo a los permisos de {rol}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
