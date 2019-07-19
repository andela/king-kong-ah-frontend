import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseRoute from '<components>/BaseRoute';
import GlobalStyle from './styles/GlobalStyle';
import ThemeWrapper from './styles/ThemeWrapper/ThemeWrapper';

const App = () => {
  toast.configure({
    autoClose: 8000,
    draggable: false,
    position: toast.POSITION.TOP_LEFT,
  });
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
