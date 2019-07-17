import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Button from './Button';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Button', () => {
  it('should render the Button component', () => {
    const { getByText } = render(
      <Button onClick={() => alert('hello')}>Submit</Button>,
    );
    expect(getByText('Submit')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = render(
      <Button onClick={() => alert('hello')}>Submit</Button>,
    );
    expect(getByText('Submit')).toHaveStyle(`
      color: #FFFFFF;
      display: block;
      font-size: "1.6rem";
      height: "3.8";
      width: "12rem";
    `);
  });

  it('should render button text', () => {
    const { getByText } = render(
      <Button onClick={() => alert('hello')}>Submit</Button>,
    );

    expect(getByText('Submit')).toHaveTextContent('Submit');
  });

  it('should render submit buttonType', () => {
    const { getByText } = render(
      <Button buttonType="submit" onClick={() => alert('hello')}>
        Submit
      </Button>,
    );

    expect(getByText('Submit')).toHaveStyle(`
      width: 43.09rem;
      height: 5.0rem;
      display: block;
      font-size: 2.0rem;
      background: #690375;
      color: #FFFFFF;
      border-radius: 0.8rem;
      border: 1px solid #666666;
      cursor: pointer;
    `);
  });

  it('should render getStarted buttonType', () => {
    const { getByText } = render(
      <Button buttonType="getStarted" onClick={() => alert('hello')}>
        Get Started
      </Button>,
    );

    expect(getByText('Get Started')).toHaveStyle(`
    height: 3.8rem;
    width: 12rem;
    height: 5.0rem;
    display: block;
    font-size: 1.6rem;
    background: transparent;
    color: #B02091;
    border-radius: none;
    border: 1px solid #B02091;
    cursor: pointer;
    `);
  });
});
