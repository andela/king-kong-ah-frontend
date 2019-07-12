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
