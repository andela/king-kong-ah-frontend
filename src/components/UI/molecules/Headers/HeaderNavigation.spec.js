import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import HeaderNavigation from './HeaderNavigation';
import headerMapper from '<helpers>/headerMapper';
import items from '<fixtures>/navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const navItems = headerMapper(items);

describe('Header Navigation', () => {
  it('should render header navigation component', async () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderNavigation navItems={navItems} />
      </MemoryRouter>,
    );
    expect(container).toBeTruthy();
  });

  it('should render navigation items', async () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <HeaderNavigation navItems={navItems} />
      </MemoryRouter>,
    );
    expect(getByPlaceholderText('search experience')).toBeTruthy();
    expect(getByText('sign in')).toBeTruthy();
  });
});
