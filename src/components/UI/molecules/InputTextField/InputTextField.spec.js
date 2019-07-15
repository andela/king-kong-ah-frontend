import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import InputTextField from './InputTextField';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const defaultProps = {
  label: 'First Name',
  name: 'firstname',
  type: 'text',
  errorMessage: 'this field required',
  onChange: () => {},
};

const setUp = (props) => {
  const utils = render(<InputTextField {...defaultProps} {...props} />);
  return utils;
};

describe('Input Text Fields', () => {
  it('should render a input field component', () => {
    const { container } = setUp();
    expect(container).toBeTruthy();
  });

  it('should render  and return the first name', () => {
    const { getByLabelText } = setUp({ type: 'password' });
    const input = getByLabelText(defaultProps.label);

    expect(input.getAttribute('name')).toBe('firstname');
  });


  it('should render a input password field component', () => {
    const { getByLabelText } = setUp({ type: 'password' });
    const input = getByLabelText(defaultProps.label);

    expect(input.getAttribute('type')).toBe('password');
  });

  it('should render a input password field component and return the id', () => {
    const { getByLabelText } = setUp({ type: 'password' });
    const input = getByLabelText(defaultProps.label);
    const value = input.getAttribute('id');

    expect(input.getAttribute(input.attributes[1].name)).toBe(value);
  });

  it('should render password field component and return error message', () => {
    const { container } = setUp({ type: 'password' });

    expect(container.lastChild).toHaveTextContent(defaultProps.errorMessage);
  });
});
