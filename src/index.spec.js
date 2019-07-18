import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

describe('App - Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<App />);

    expect(container.lastElementChild.innerHTML)
      .toBe('Welcome to Authors Haven');
  });
});
