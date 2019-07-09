import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Title from './Title';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Title', () => {
  it('should render the Title component', () => {
    const { getByText } = render(<Title>Authors Haven</Title>);

    expect(getByText('Authors Haven')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = render(<Title>Authors Haven</Title>);
    expect(getByText('Authors Haven')).toHaveStyle(`
    font-size: "1.6";
    font-weight: 700;
    padding-bottom: "3.2"
  `);
  });

  it('should render block title', () => {
    const { getByText } = render(<Title display="block">Authors Haven</Title>);

    expect(getByText('Authors Haven')).toHaveStyle(`
    display: block;
  `);
  });

  it('should render text passed as children', () => {
    const { getByText } = render(<Title>Authors Haven</Title>);

    expect(getByText('Authors Haven')).toHaveTextContent('Authors Haven');
  });
});
