import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Divider from './Divider';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Divider', () => {
  it('should render the Divider Component with default style', () => {
    const { container } = render(<Divider />);

    expect(container.lastChild).toHaveStyle(`
            border: 1px solid primary
        `);
  });

  it('should render the Divider Component with max-width', () => {
    const { container } = render(<Divider maxWidth="md" />);

    expect(container.lastChild).toHaveStyle(`
            maxWidth: md
        `);
  });

  it('should render the Divider Component with height', () => {
    const { container } = render(<Divider height="zero" />);

    expect(container.lastChild).toHaveStyle(`
            height: zero
        `);
  });
});
