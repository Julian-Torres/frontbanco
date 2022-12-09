import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { Login } from "./components/login/Login";
import { PrivateRoute } from './routers/PrivateRoute'
import { PublicRoute } from './routers/PublicRoute'
import { AdminRoutes } from './routers/AdminRoutes'

const init = () => {
    return localStorage.getItem('token') ? { logged: true } : { logged: false };
}
  
const App = () => {

    const [user, setUser] = useState(init());
    let modulo = AdminRoutes;

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
                    component={modulo}
                />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
}

export {
    App
}