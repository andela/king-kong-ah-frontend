import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import WelcomeSection from './WelcomeSection';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(<WelcomeSection/>);

  return {
    ...utils,
  };
};

describe('Welcome Section', () => {
  it('should render WelcomeSection  component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });
  it('should render its children', () => {
    const { container } = setup();

    expect(container.children).toBeTruthy();
  });
});
