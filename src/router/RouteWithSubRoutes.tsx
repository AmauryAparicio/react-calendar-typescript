import React, { FunctionComponent, useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { iRoute } from "../interfaces";
import routesTypes from "./routesTypes";

const RouteWithSubRoutes: FunctionComponent<iRoute> = (route) => {
  const { exact, path, routes, type } = route;

  const location = useLocation();
  const { auth, hidden, admin } = routesTypes;

  useEffect(() => {
    routes !== undefined &&
      routes.map((subRoutes) => {
        subRoutes.type = type;
        return routes;
      });
  }, [routes, type]);

  switch (type) {
    case auth:
      localStorage.setItem(
        "lastPath",
        location.pathname + (location.search ? location.search : "")
      );
      if (true) {
        return (
          <Route
            exact={exact !== undefined && exact}
            path={path}
            render={(props) => <route.component {...props} routes={routes} />}
          />
        );
      } else {
        return <Redirect to="/auth/login" />;
      }
    case hidden:
      if (!false) {
        return (
          <Route
            exact={exact !== undefined && exact}
            path={path}
            render={(props) => <route.component {...props} routes={routes} />}
          />
        );
      } else {
        return <Redirect to="/" />;
      }
    case admin:
      localStorage.setItem(
        "lastPath",
        location.pathname + (location.search ? location.search : "")
      );
      if (true) {
        return (
          <Route
            exact={exact !== undefined && exact}
            path={path}
            render={(props) => <route.component {...props} routes={routes} />}
          />
        );
      } else {
        return <Redirect to="/" />;
      }
    default:
      return (
        <Route
          exact={exact !== undefined && exact}
          path={path}
          render={(props) => <route.component {...props} routes={routes} />}
        />
      );
  }
};

export default RouteWithSubRoutes;
