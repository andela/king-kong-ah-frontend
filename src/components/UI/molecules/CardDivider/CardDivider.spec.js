import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import CardDivider from './CardDivider';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('CardDivider', () => {
  it('should render the CardDivider component', () => {
    const { container } = render(<CardDivider />);

    expect(container.lastChild).toBeTruthy();
  });

  it('should render card divider with text', () => {
    const { getByText } = render(<CardDivider text='Sign In With' />);

    expect(getByText('Sign In With')).toBeTruthy();
  });

  it('should render card divider with default props', () => {
    const { container } = render(<CardDivider />);

    expect(container.lastChild).toHaveStyle(`
      color: #B02091,
      width: 8.2rem,
      margin: 0.9rem,
    `);
  });
});
