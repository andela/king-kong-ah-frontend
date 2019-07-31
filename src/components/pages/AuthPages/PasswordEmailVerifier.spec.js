import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import PasswordEmailVerifier from './PasswordEmailVerifier';
import formHandler from '<helpers>/formHandler';

jest.mock('<helpers>/formHandler');
afterEach(cleanup);

const setup = () => {
  const utils = render(
    <MemoryRouter>
      <PasswordEmailVerifier history={{}} />
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('PasswordEmailVerifier', () => {
  it('should render PasswordEmailVerifier page', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should render with sign in text', () => {
    const { getByText } = setup();

    expect(getByText('Sign In')).toBeTruthy();
  });

  it('should call handleSubmit once', () => {
    const { getByText, getByTestId } = setup();

    fireEvent.change(getByTestId('email'), { target: { value: 'abc@de.com' } });

    fireEvent.click(getByText('Submit'));

    expect(formHandler).toHaveBeenCalledTimes(1);
  });
});
