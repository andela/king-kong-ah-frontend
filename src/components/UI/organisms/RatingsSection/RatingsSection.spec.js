import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import RatingsSection from './RatingsSection';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(<RatingsSection/>);

  return {
    ...utils,
  };
};

describe('Ratings Section', () => {
  it('should render its component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });
  it('should render its children', () => {
    const { container } = setup();

    expect(container.children).toBeTruthy();
  });
});
