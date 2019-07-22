import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Signup from './Signup';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

const setup = () => {
  const utils = render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Signup', () => {
  it('should render Signup page', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should render with sign up text', () => {
    const { getByText } = setup();

    expect(getByText('Sign Up')).toBeTruthy();
  });
});
