import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import { estaAutenticado } from "./admin_autenticacao";
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        estaAutenticado() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin-login" exact component={AdminLogin} />
                <PrivateRoute path="/admin_add_produto" component={() => <h1>Você está logado</h1>} />
            </Switch>
        
        </BrowserRouter>
    );
}