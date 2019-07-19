import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import Text from '<atoms>/Text/Text';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';
import items from '<fixtures>/navItems';
import PageLayout from '<templates>/PageLayout/PageLayout';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (loader) => {
  const navItems = headerMapper(items);
  const props = { navItems };
  if (loader) {
    props.callback = loader;
  }

  const utils = render(
    <MemoryRouter>
      <PageLayout {...props}>
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

  return {
    ...utils,
  };
};

describe('Page Layout', () => {
  it('should render page layout with initial state and callback', () => {
    const { container, getByPlaceholderText, getByText } = setup();

    fireEvent.click(getByText('Get Started'));

    fireEvent.change(getByPlaceholderText('search experience'), {
      target: { value: 'test 101' },
    });

    fireEvent.focus(getByPlaceholderText('search experience'));

    expect(container.firstChild).toBeTruthy();
  });

  it('should render header and children', () => {
    const { getByPlaceholderText, getByText } = setup();

    expect(getByPlaceholderText('search experience')).toBeTruthy();
    expect(getByText('sign in')).toBeTruthy();
  });
});

describe('React Loader', () => {
  it('should load the loader component when a callback is not called', () => {
    const { container } = setup(displayLoader);

    expect(container.firstChild).toBeTruthy();
  });
});

describe('displayLoader Function', () => {
  it('should return a value when displayLoader is called', async () => {
    const data = await displayLoader(1000);
    expect(data).toBe('loaded');
  });
});
