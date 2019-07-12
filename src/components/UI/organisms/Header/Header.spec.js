import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Header from './Header';
import HeaderNavigation from '<molecules>/Headers/HeaderNavigation';
import Text from '<atoms>/Text/Text';
import headerMapper from '<helpers>/headerMapper';
import items from '<fixtures>/navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const navItems = headerMapper(items);

  const utils = render(
    <MemoryRouter>
      <Header navItems={navItems}>
        <Text>Hello world</Text>
        <HeaderNavigation navItems={navItems} />
      </Header>
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Header', () => {
  it('should render Header component', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should render navigation item props', () => {
    const { getByPlaceholderText, getByText } = setup();

    expect(getByPlaceholderText('search experience')).toBeTruthy();

    expect(getByText('sign in')).toBeTruthy();
  });
});
