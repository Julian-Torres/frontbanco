import React from 'react';
import { NavLink } from 'react-router-dom';

const logout = () => {
  window.location.href = '/';
  localStorage.clear();
}

export const HeaderAdmin = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">
    <img src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/logo-citibank-2.jpg" alt="logo_emp" width="45" height="40"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/usuarios">Usuarios</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/tarjetas">Tarjetas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/cuentas">Cuentas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/productos">Productos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/depositos">Depositos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/transferencias">Transferencias</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " activeClassName = "active" exact aria-current="page" to = "/abonos">Abonos</NavLink>
                </li>
                <li className="nav-item dropdown">
                 <NavLink className="nav-link "  activeClassName = "active"  exact aria-current="page" to = "/acerca">Nosotros</NavLink>
                </li>
          </ul> 

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">

                    <ul className="navbar-nav ml-auto">
                        <button
                            className="btn btn-success"
                            onClick={logout}
                        >
                            Salir
                        </button>
                    </ul>
            </div>
    
    </div>
  </div>
</nav>
  )
}