import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Text from './Text';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Text', () => {
  it('should render the Text component', () => {
    const { getByText } = render(<Text>Hello</Text>);

    expect(getByText('Hello')).toBeTruthy();
  });

  it('should render text in uppercase', () => {
    const { getByText } = render(<Text textTransform="uppercase">Hello</Text>);

    expect(getByText('Hello')).toHaveStyle(`
    text-transform: uppercase;
  `);
  });

  it('should render text with line-height', () => {
    const { getByText } = render(<Text lineHeight="double">Hello</Text>);

    expect(getByText('Hello')).toHaveStyle(`
    line-height: 2.0;
  `);
  });


  it('should render text with line-spacing', () => {
    const { getByText } = render(<Text letterSpacing='xs'>Hello</Text>);

    expect(getByText('Hello')).toHaveStyle(`
    letter-spacing: 0.9rem;
  `);
  });

  it('should apply default style', () => {
    const { getByText } = render(<Text>Hello</Text>);
    expect(getByText('Hello')).toHaveStyle(`
    font-size: "1.6";
    textAlign: "left";
  `);
  });

  it('should render text passed as children', () => {
    const { getByText } = render(<Text>Hello</Text>);

    expect(getByText('Hello')).toHaveTextContent('Hello');
  });
});
