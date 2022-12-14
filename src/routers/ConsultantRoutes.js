import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { HeaderConsultant } from '../components/ui/HeaderConsultant'
import { HomeView } from '../components/home/HomeView'
import { UsuarioView } from '../components/usuarios/UsuarioView'
import { CuentaView } from '../components/cuentas/CuentaView'
import { ProductoView } from '../components/productos/ProductoView'
import { DepositoView } from '../components/depositos/DepositoView'
import { UsuarioUpdate } from '../components/usuarios/UsuarioUpdate'

export const ConsultantRoutes = () => {
    return (
        <>
            <HeaderConsultant />

            <div className="container mt-2">
                <Switch>
                    <Route exact path='/home' component={HomeView} />
                    <Route exact path='/usuarios' component={UsuarioView} />
                    <Route exact path='/cuentas' component={CuentaView} />
                    <Route exact path='/productos' component={ProductoView} />
                    <Route exact path='/depositos' component={DepositoView} />
                    <Route exact path='/usuarios/:usuarioId' component={UsuarioUpdate} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
} 