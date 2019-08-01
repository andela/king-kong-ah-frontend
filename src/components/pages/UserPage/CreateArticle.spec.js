import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '<src>/helpers/testUtils';
import CreateArticle from './CreateArticle';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import items from './navItems';

jest.mock('<helpers>/editorJS', () => () => {});

afterEach(cleanup);

const setup = () => {
  const navItems = headerMapper(items);
  const utils = render(
    <MemoryRouter>
      <PageLayout navItems={navItems}>
        <CreateArticle />
      </PageLayout>
    </MemoryRouter>,
  );

  return {
    ...utils,
  };
};

describe('Create Article Page', () => {
  it('should render Article Page', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  it('should submit article', () => {
    const { container, getByText } = setup();
    fireEvent.click(getByText('Save draft'));
    expect(container.firstChild).toBeTruthy();
  });
});
