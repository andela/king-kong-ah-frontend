import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import RatingBlock from './RatingBlock';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(<RatingBlock
    text='Articles Read'
    counter={100}
  />);

  return {
    ...utils,
  };
};

describe('Rating Block', () => {
  it('should render its component', () => {
    const { getByText } = setup();

    expect(getByText('Articles Read')).toBeTruthy();
  });

  it('should render children', () => {
    const { container } = setup();

    expect(container.children).toBeTruthy();
  });
});
