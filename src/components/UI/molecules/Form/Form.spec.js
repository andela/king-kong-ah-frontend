import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Form from './Form';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const inputFieldItems = {
  rules: {
    email: 'required|email',
    password: 'required|string',
  },

  inputData: [
    {
      label: 'Email',
      type: 'text',
      placeholder: 'Enter email',
      name: 'email',
    }, {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      name: 'password',
    }],

  callback: () => true,

};
const setup = (props) => {
  const utils = render(
    <Form {...props} />,
  );

  return { ...utils };
};

describe('Form', () => {
  it('should render the Form component', () => {
    const { container } = setup(inputFieldItems);

    expect(container).toBeTruthy();
  });
});
