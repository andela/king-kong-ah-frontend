import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Rating from './Rating.jsx';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <MemoryRouter>
      <Rating {...props} />
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('Rating', () => {
  const props = {
    title: 'Rate this article',
    ratingText: 'Average rating 0',
  };

  it('should render successfully', () => {
    const { container } = setup(props);

    expect(container).toBeTruthy();
  });
});
