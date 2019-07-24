import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import RatingGroup from './RatingGroup';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(<RatingGroup/>);

  return {
    ...utils,
  };
};

describe('Ratings Group', () => {
  it('should render its component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });
  it('should render its children', () => {
    const { container } = setup();

    expect(container.children).toBeTruthy();
  });
});
