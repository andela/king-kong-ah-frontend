import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '<core>/routes';

const BaseRoute = () => (
  <Switch>
    {Routes.default.map(({ exact, path, component }, index) => (
      <Route key={index} exact={exact} path={path} component={component} />
    ))}
  </Switch>
);

export default BaseRoute;
