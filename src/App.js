import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from './pages';
import { adminRoutes } from "./routes";
import { AdminTemplate } from "./templates";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {adminRoutes.map( (item, index) => (
          <AdminTemplate exact={item.exact} Component={item.Component} path={item.path} key={index} />
        ) )}
        <Route exact={true} path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
