import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UnauthenticatedRoutes } from '<core>/routes';

const BaseRoute = () => (
  <Switch>
    {UnauthenticatedRoutes.default.map(({ exact, path, component }, index) => (
      <Route key={index} exact={exact} path={path} component={component} />
    ))}
  </Switch>
);

export default BaseRoute;
