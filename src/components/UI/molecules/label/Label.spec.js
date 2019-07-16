import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Label from './Label';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const defaultProps = {
  content: 'true',
  children: 'First Name',
};

const id = btoa(defaultProps.children);

const setUp = (props) => {
  const utils = render(
    <Label
      id={id}
      {...defaultProps}
      {...props}
    >
      {defaultProps.children}
    </Label>,
  );
  return utils;
};

describe('Label', () => {
  it('should render a input field component', () => {
    const { container } = setUp();

    expect(container).toBeTruthy();
  });


  it('should return color red', () => {
    const { getByText } = setUp({ color: 'red' });
    const label = getByText('First Name');

    expect(label.getAttribute('color')).toBe('red');
  });

  it('should return for ', () => {
    const { getByText } = setUp({ color: 'red' });
    const label = getByText('First Name');

    expect(label.parentElement.getAttribute('for')).toBe(id);
  });
});
