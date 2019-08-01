import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import PasswordReset from './PasswordReset';
import formHandler from '<helpers>/formHandler';

jest.mock('<helpers>/formHandler');
afterEach(cleanup);

const setup = (search = '?token=fakeToken') => {
  const utils = render(
    <MemoryRouter>
      <PasswordReset
        history={{ push: () => {} }}
        location={{ search }}
      />
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('PasswordReset', () => {
  it('should render PasswordReset page', () => {
    const { container } = setup();
    setup('');

    expect(container.firstChild).toBeTruthy();
  });

  it('should render with sign in text', () => {
    const { getByText } = setup();

    expect(getByText('Sign In')).toBeTruthy();
  });

  it('should call handleSubmit once', () => {
    const { getByText, getByTestId } = setup();

    fireEvent.change(
      getByTestId('password'), { target: { value: 'abCDe2com' } },
    );

    fireEvent.click(getByText('Submit'));

    expect(formHandler).toHaveBeenCalledTimes(1);
  });
});
