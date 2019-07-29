import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import About from './About.jsx';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('About', () => {
  const props = {
    title: 'Authors-Haven',
    textContent: [
      'Welcome to Authors Haven.',
      'A social platform for the creative heart.',
    ],
  };

  it('should render successfully', () => {
    const { container } = render(<About {...props} />);

    expect(container).toBeTruthy();
  });

  it('should render the with Title component', () => {
    const { getByText } = render(<About {...props} />);

    expect(getByText(props.title)).toHaveStyle(`
      color: #FFFFFF;
      font-size: 3.2rem;
      padding-bottom: 1.3rem;
    `);
  });
});
