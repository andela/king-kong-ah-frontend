import React from 'react';
import { render } from '@testing-library/react';
import Protected from './Protected';

describe('Protected - Component', () => {
  it('should render without crashing protected', () => {
    const { container } = render(<Protected />);

    expect(container).toBeTruthy();
  });
});
