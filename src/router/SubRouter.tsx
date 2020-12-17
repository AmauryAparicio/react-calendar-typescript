import React, { FunctionComponent } from "react";
import { Switch } from "react-router-dom";
import { iRoute } from "../interfaces";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const SubRouter: FunctionComponent<{ routes: Array<iRoute> }> = ({
  routes,
  children,
}) => {
  return (
    <>
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
      {children}
    </>
  );
};

export default SubRouter;
