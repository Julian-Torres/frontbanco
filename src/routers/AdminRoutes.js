import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { HeaderAdmin } from '../components/ui/HeaderAdmin'
import { HomeView } from '../components/home/HomeView'

import { UsuarioView } from '../components/usuarios/UsuarioView'
import { TarjetaView } from '../components/tarjetas/TarjetaView'
import { CuentaView } from '../components/cuentas/CuentaView'
import { ProductoView } from '../components/productos/ProductoView'
import { DepositoView } from '../components/depositos/DepositoView'
import { TransferenciaView } from '../components/transferencias/TransferenciaView.js'
import { AbonoView } from '../components/abonos/AbonoView'

import { AboutView } from '../components/about/AboutView'

export const AdminRoutes = () => {
    return (
        <>
            <HeaderAdmin />

            <div className="container mt-2">
                <Switch>
                    <Route exact path='/home' component={HomeView} />
                    <Route exact path='/usuarios' component={UsuarioView} />
                    <Route exact path='/tarjetas' component={TarjetaView} />
                    <Route exact path='/cuentas' component={CuentaView} />
                    <Route exact path='/productos' component={ProductoView} />
                    <Route exact path='/depositos' component={DepositoView} />
                    <Route exact path='/transferencias' component={TransferenciaView} />
                    <Route exact path='/abonos' component={AbonoView} />
                    <Route exact path='/acerca' component={AboutView} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
} 