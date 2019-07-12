import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import HomePage from '../homepage/Homepage';
import PageLayout from '<templates>/pageLayout';
import headerMapper from '<helpers>/headerMapper';
// import loadData from '<helpers>/dummyLoader';
import items from '<pages>/homepage/navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const navItems = headerMapper(items);

describe('Home Page', () => {
  it('should render Home Page', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <PageLayout navItems={navItems} >
          <HomePage/>
        </PageLayout>
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Get Started'));

    expect(container.firstChild).toBeTruthy();
  });
});
