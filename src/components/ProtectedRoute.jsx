import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoutes } from '<core>/routes';

const fakeAuth = {
  isVerified: true,
};

const ProtectedRoute = () => {
  return (
    <Fragment>
      <Switch>
        {
          ProtectedRoutes.map(({ component: Component, ...rest }, index) => (
            <Route
              key={index} {...rest}
              render={props => (fakeAuth.isVerified
                ? (<Component {...props} />) : (
                  <Redirect to={{
                    pathname: '/login',
                    state: { from: props },
                  }} />))} />
          ))}
      </Switch>
    </Fragment>
  );
};

export default ProtectedRoute;
