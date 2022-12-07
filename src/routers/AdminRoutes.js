import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { HeaderAdmin } from '../components/ui/HeaderAdmin'
import { HomeView } from '../components/home/HomeView'
import { UserView } from '../components/users/UserView'
import { AboutView } from '../components/about/AboutView'

export const AdminRoutes = () => {
  return (
      <>
       <HeaderAdmin />

          <div className="container mt-2">
              <Switch>
                  <Route exact path='/home' component={HomeView} />
                  <Route exact path='/usuarios' component={UserView} />
                  <Route exact path='/acerca' component={AboutView} />

                  <Redirect to="/home" />
              </Switch>
          </div>
      </>
  )
} 