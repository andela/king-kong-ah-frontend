/* eslint-disable react/prop-types */
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '<src>/helpers/testUtils';
import withCheckAuth from './withCheckAuth';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../helpers/requestApi');

afterEach(cleanup);

const setup = (path) => {
  const history = {
    push: () => {},
  };

  const Wrapper = (props) => {
    return (
      <button
        onClick={props.handleSubmit}
      >
      Hello World
      </button>);
  };

  Wrapper.defaultProps = {
    history,
  };
  const HOC = withCheckAuth(Wrapper, path);
  const utils = render(<HOC history={history}/>);

  return {
    ...utils,
  };
};

describe('WithCheckAuth', () => {
  it('should render withCheckAuth HOC', () => {
    const { container } = setup('signup');
    expect(container.firstChild).toBeTruthy();
  });

  it('should fire click event on handleSubmit function', () => {
    const { getByText } = setup('signup');
    fireEvent.click(getByText('Hello World'));
  });

  it('should render withCheckAuth HOC', () => {
    const { getByText } = setup('error409');
    fireEvent.click(getByText('Hello World'));
  });

  it('should render withCheckAuth HOC', () => {
    const { getByText } = setup('error400');
    fireEvent.click(getByText('Hello World'));
  });
});
