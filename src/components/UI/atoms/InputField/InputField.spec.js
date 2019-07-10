import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import InputField from './InputField';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Input Fields', () => {
  it('should render a text input field component', () => {
    const { container } = render(<InputField type="text" />);

    expect(container).toBeTruthy();
  });

  it('should render a password input field component', () => {
    const { container } = render(<InputField type="password" />);

    expect(container).toBeTruthy();
  });

  it('should render an email input field component', () => {
    const { container } = render(<InputField type="email" />);

    expect(container).toBeTruthy();
  });

  it('should render input fields with additional styles', () => {
    const { container } = render(
      <InputField type="text" padding="xs" />,
    );

    expect(container.firstChild).toHaveStyle(`
    padding: 0.9rem;
  `);
  });
});
