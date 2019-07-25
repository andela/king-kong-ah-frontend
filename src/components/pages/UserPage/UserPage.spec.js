import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import UserPage from './UserPage';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import items from './navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const navItems = headerMapper(items);

  const utils = render(
    <MemoryRouter>
      <PageLayout navItems={navItems}>
        <UserPage />
      </PageLayout>
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Home Page', () => {
  it('should render Home Page', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });
});
