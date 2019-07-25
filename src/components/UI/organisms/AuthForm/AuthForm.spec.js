import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import AuthForm from './AuthForm';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const loginRules = {
    email: 'required|email',
    password: ['required'],
  };

  const loginData = [
    {
      label: 'Email',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
    },
  ];
  const utils = render(
    <AuthForm
      title="Sign In"
      dividerText="Or Sign In With"
      rules={loginRules}
      inputData={loginData}
      callback={() => true}
    />,
  );

  return {
    ...utils,
  };
};

describe('AuthForm', () => {
  it('should render AuthForm component', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });
});
