import React from 'react';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import StyledLink from './StyledLink';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <MemoryRouter>
      <StyledLink {...props} >Authors Haven</StyledLink>
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('StyledLink', () => {
  it('should render the Link component', () => {
    const { getByText } = setup({ url: '#' });

    expect(getByText('Authors Haven')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = setup({});

    expect(getByText('Authors Haven')).toHaveStyle(`
      font-size: '1.6'
      display: inline-block;
      text-decoration: none;
    `);
  });

  it('should render an external tag styled link', () => {
    const { container, getByText } = setup({
      url: 'http://google.com',
      isExternal: true,
    });

    fireEvent.click(getByText('Authors Haven'));
    expect(container.firstChild).toBeTruthy();
  });

  it('should render react component as children', () => {
    const { container } = setup({
      url: 'https://www.google.com',
      tag: 'true',
      isExternal: true,
    });

    expect(container.firstChild).toBeTruthy();
  });

  it('should render react component as children', () => {
    const { container } = setup({
      url: 'https://www.google.com',
      tag: 'true',
      isExternal: true,
    });

    expect(container.firstChild).toBeTruthy();
  });

  it('should apply style for dropdown', () => {
    const { getByText } = setup({
      dropdown: 'true',
      to: '/',
      fontSize: 'medium',
      padding: 'sm',
      textAlign: 'left',
    });

    expect(getByText('Authors Haven')).toHaveStyle(`
      font-size: '1.6'
      display: inline-block;
      text-decoration: none;
    `);
  });
});
