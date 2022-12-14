import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { Login } from "./components/login/Login";
import { PrivateRoute } from './routers/PrivateRoute'
import { PublicRoute } from './routers/PublicRoute'
import { AdminRoutes } from './routers/AdminRoutes'
import { ConsultantRoutes } from './routers/ConsultantRoutes'


const init = () => {
    return localStorage.getItem('token') ? { logged: true } : { logged: false };
}

const rol = () => {
    return localStorage.getItem('rol');
}

  
const App = () => {

    const [user, setUser] = useState(init());
    const [role, setRole] = useState(rol());

    let ruta;

    switch (role) {
        case 'Admin':
            ruta = AdminRoutes;
            break;
        case 'Asesor':
            ruta = ConsultantRoutes;
            break;
        default:
            ruta = Login;
    
    }

    return <Router>
        <div>
            <Switch>
                <PublicRoute
                    isAuth={user.logged}
                    exact
                    path="/"
                    component={Login}
                />
                <PrivateRoute
                    isAuth={user.logged}
                    component={ruta}
                />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
}

export {
    App
}