import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import HomePage from './HomePage';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import items from '<pages>/Home/navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const navItems = headerMapper(items);

  const utils = render(
    <MemoryRouter>
      <PageLayout navItems={navItems}>
        <HomePage />
      </PageLayout>
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Home Page', () => {
  it('should render Home Page', () => {
    const { container, getByText } = setup();

    fireEvent.click(getByText('Get Started'));

    expect(container.firstChild).toBeTruthy();
  });
});
