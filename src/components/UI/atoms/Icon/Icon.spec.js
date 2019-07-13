import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import mockIcon from '<fixtures>/icons/mockIcon';
import Icon from './Icon.jsx';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

jest.mock('<fixtures>/icons/Star.svg', () => jest.fn(() => mockIcon));

const defaultProps = {
  icon: 'search',
  id: 'mockIcon',
};

const setup = (props) => {
  const utils = render(<Icon {...defaultProps} {...props} />);

  return {
    ...utils,
  };
};


describe('Icon', () => {
  it('should render the Icon component with default prop', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render the Icon with height', () => {
    const { queryByTestId } = setup({ height: 'medium' });

    const icon = queryByTestId('mockIcon');

    expect(icon).toHaveStyle(`
    height: medium
    `);
  });

  it('should render the Icon with width', () => {
    const { queryByTestId } = setup({ width: 'medium' });

    const icon = queryByTestId('mockIcon');

    expect(icon).toHaveStyle(`
    width: medium
    `);
  });

  it('should render the Icon with display', () => {
    const { queryByTestId } = setup({ display: 'inline' });

    const icon = queryByTestId('mockIcon');

    expect(icon).toHaveStyle(`
    display: inline
    `);
  });

  it('should render the Icon with color', () => {
    const { queryByTestId } = setup({ color: 'primary' });

    const icon = queryByTestId('mockIcon');

    expect(icon).toHaveStyle(`
    color: primary
    `);
  });
});
