/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import ArticleBody from './ArticleBody';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <ArticleBody />,
  );

  return { ...utils };
};

describe('ArticleBody', () => {
  it('should render the ArticleBody component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });


  it('should render the ArticleBody Component with textFontSize', () => {
    const { container } = render(<ArticleBody textFontSize="medium" />);

    expect(container.lastChild).toHaveStyle(`
              textFontSize: medium,
          `);
  });
});
