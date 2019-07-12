import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import HeaderNavigation from './HeaderNavigation';
import headerMapper from '<helpers>/headerMapper';
import items from '<fixtures>/navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const navItems = headerMapper(items);

  const utils = render(
    <MemoryRouter>
      <HeaderNavigation navItems={navItems} />
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Header Navigation', () => {
  it('should render header navigation component', async () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render navigation items', async () => {
    const { getByPlaceholderText, getByText } = setup();

    expect(getByPlaceholderText('search experience')).toBeTruthy();

    expect(getByText('sign in')).toBeTruthy();
  });
});
