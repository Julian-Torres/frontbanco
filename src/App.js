import React from "react";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

import { Home } from "./Home"; 
import { About } from "./About";
import { Users } from "./Users";
import { Login } from "./Login";

const App = () => {
    return <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                    <li>
                        <Link to="/login">Login</Link>
                    </li> 
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/"component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users"component={Users} />

                <Route exact path="/login"component={Login} />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
}

export {
    App
}