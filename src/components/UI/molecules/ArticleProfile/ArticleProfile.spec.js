/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import ArticleProfile from './ArticleProfile';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <ArticleProfile />,
  );

  return { ...utils };
};

describe('ArticleProfile', () => {
  it('should render the ArticleProfile component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render the Articleprofile Component with titleFontSize', () => {
    const { container } = render(<ArticleProfile titleFontSize="large" />);

    expect(container.lastChild).toHaveStyle(`
              titleFontSize: large
          `);
  });

  it('should render the ArticleContent Component with textFontSize', () => {
    const { container } = render(<ArticleProfile textFontSize="medium" />);

    expect(container.lastChild).toHaveStyle(`
              textFontSize: medium,
          `);
  });
});
