import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from '<components>/BaseRoute';
import './index.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <BaseRoute />
      </Fragment>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
