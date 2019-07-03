import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '<routes>/index';

const BaseRoute = () => (
  <Fragment>
    <Switch>
      {Routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </Fragment>
);

export default BaseRoute;
