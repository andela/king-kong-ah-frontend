/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import ArticleHeading from './ArticleHeading';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <ArticleHeading />,
  );

  return { ...utils };
};

describe('ArticleHeading', () => {
  it('should render the ArticleHeading component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render the ArticleHeading Component with titleFontSize', () => {
    const { container } = render(<ArticleHeading titleFontSize="large" />);

    expect(container.lastChild).toHaveStyle(`
              titleFontSize: large
          `);
  });
});
