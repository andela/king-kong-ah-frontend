import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Login from './Login';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

const setup = () => {
  const utils = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Login', () => {
  it('should render Login page', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should render with sign in text', () => {
    const { getByText } = setup();

    expect(getByText('Sign In')).toBeTruthy();
  });
});
