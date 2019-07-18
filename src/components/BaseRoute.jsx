/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UnauthenticatedRoutes } from '<core>/routes';

const BaseRoute = () => (
  <Fragment>
    <Switch>
      {UnauthenticatedRoutes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </Fragment>
);

export default BaseRoute;
