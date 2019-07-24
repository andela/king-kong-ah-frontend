import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import RatingHeadings from './RatingHeadings';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(<RatingHeadings/>);

  return {
    ...utils,
  };
};

describe('Rating Block', () => {
  it('should render its component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });
  it('should render its children', () => {
    const { container } = setup();

    expect(container.children).toBeTruthy();
  });
});
