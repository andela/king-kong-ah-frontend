import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import InputFormField from './InputFormField';
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
  const utils = render(<InputFormField {...defaultProps} {...props} />);
  return utils;
};

describe('Input Form Fields', () => {
  it('should render a input field component', () => {
    const { container } = setUp();
    expect(container).toBeTruthy();
  });

  it('should render a input password field component', () => {
    const { container } = setUp({ type: 'password' });
    expect(container).toBeTruthy();
  });


  it('should render a input field component with error message', () => {
    const { container } = setUp({ errorMessage: 'first name is required' });
    expect(container).toBeTruthy();
  });
});
