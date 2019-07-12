import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import Text from '<atoms>/Text/Text';
import PageLayout from './pageLayout';
import headerMapper from '<helpers>/headerMapper';
// import loadData from '<helpers>/dummyLoader';
import items from '<fixtures>/navItems';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const navItems = headerMapper(items);

describe('Page Layout', () => {
  it('should render page layout with initial state and callback', () => {
    const { container, getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <PageLayout navItems={navItems}>
          <Text
            content="true"
            key="0"
            display="inline"
            fontSize="medium"
            color="primary"
            textTransform="capitalize"
          >
            Sign Up
          </Text>
        </PageLayout>
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Get Started'));

    fireEvent.change(getByPlaceholderText('search experience'), {
      target: { value: 'test 101' },
    });

    fireEvent.focus(getByPlaceholderText('search experience'));

    expect(container.firstChild).toBeTruthy();
  });

  it('should render header and children', () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <PageLayout navItems={navItems}>
          <Text
            content="true"
            key="0"
            display="inline"
            fontSize="medium"
            color="primary"
            textTransform="capitalize"
          >
            Sign Up
          </Text>
        </PageLayout>
      </MemoryRouter>,
    );

    expect(getByPlaceholderText('search experience')).toBeTruthy();
    expect(getByText('sign in')).toBeTruthy();
  });
});

describe('React Loader', () => {
  it('should load the loader component when a callback is not called', () => {
    const { container } = render(
      <MemoryRouter>
        <PageLayout navItems={navItems} >
          <Text
            content="true"
            key="0"
            display="inline"
            fontSize="medium"
            color="primary"
            textTransform="capitalize"
          >
            Sign Up
          </Text>
        </PageLayout>
      </MemoryRouter>,
    );

    expect(container.firstChild).toBeTruthy();
  });
});

// describe('loadData Function', () => {
//   it('should return a value when loadData', async () => {
//     const data = await loadData(1000);
//     expect(data).toBe('loaded');
//   });
// });
