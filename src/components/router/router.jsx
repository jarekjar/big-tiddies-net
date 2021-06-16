import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Home from "../home/home.jsx";
import AlpacaFund from "../alpacafund/alpacafund.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home"></Redirect>;
          }}
        ></Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/alpacafund">
          <AlpacaFund />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
