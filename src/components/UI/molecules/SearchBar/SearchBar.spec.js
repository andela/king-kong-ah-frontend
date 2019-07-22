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

  it('should render style the SearchBar', () => {
    const { container } = render(
      <SearchBar getStarted> </SearchBar>,
    );

    expect(container).toHaveStyle(`
    display: block;
    `);
  });

  it('should render a transparent search bar', () => {
    const { container } = render(
      <SearchBar getStarted> </SearchBar>,
    );

    expect(container.firstChild).toHaveStyle(`
    display: flex;
    background-color: transparent;
    margin: 0rem;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    border-radius: 4.05rem;
    box-shadow: none;
    `);
  });

  it('should render a non transparent search bar', () => {
    const { container } = render(
      <SearchBar getStarted={false}> </SearchBar>,
    );

    expect(container.firstChild).toHaveStyle(`
    display: flex;
    background-color: rgb(244, 237, 237);
    margin: 0rem;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    border-radius: 4.05rem;
    box-shadow: none;
    `);
  });

  it('should type text in the input field', () => {
    const { getByPlaceholderText } = render(
      <SearchBar getStarted={false}> </SearchBar>,
    );

    const input = getByPlaceholderText('Search experiences');

    fireEvent.change(input, {
      target: { value: 'test' },
    });

    expect(input.value).toBe('test');
  });
});
