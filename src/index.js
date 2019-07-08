import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from '<components>/BaseRoute';
import GlobalStyle from './styles/GlobalStyle';
import ThemeWrapper from './styles/ThemeWrapper/ThemeWrapper';

const App = () => {
  return (
    <ThemeWrapper>
      <Fragment>
        <GlobalStyle />
        <Router>
          <BaseRoute />
        </Router>
      </Fragment>
    </ThemeWrapper>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app') || document.createElement('div'),
);

export default App;
