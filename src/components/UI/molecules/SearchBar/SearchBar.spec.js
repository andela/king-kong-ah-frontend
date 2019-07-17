import React from 'react';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Search Bar', () => {
  it('should render the SearchBar component', () => {
    const { container } = render(
      <SearchBar getStarted> </SearchBar>,
    );
    expect(container).toBeTruthy();
  });

  it('should render the SearchBar component', () => {
    const { getByPlaceholderText } = render(
      <SearchBar getStarted={false}> </SearchBar>,
    );
    fireEvent.change(getByPlaceholderText('Search experiences'), {
      target: { value: 'test 101' },
    });
  });
});
