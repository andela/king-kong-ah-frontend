import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import ThemeWrapper from '<src>/styles/ThemeWrapper/ThemeWrapper';

const ThemeProvider = ({ children }) => {
  return <ThemeWrapper>{children}</ThemeWrapper>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line max-len
const customRender = (ui, options) => render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
