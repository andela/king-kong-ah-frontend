/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import ArticleContent from './ArticleContent';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <ArticleContent />,
  );

  return { ...utils };
};

describe('ArticleContent', () => {
  it('should render the ArticleContent component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render the ArticleContent Component with titleFontSize', () => {
    const { container } = render(<ArticleContent titleFontSize="large" />);

    expect(container.lastChild).toHaveStyle(`
            titleFontSize: large
        `);
  });

  it('should render the ArticleContent Component with authorFontSize', () => {
    const { container } = render(<ArticleContent authorFontSize="medium" />);

    expect(container.lastChild).toHaveStyle(`
            authorFontSize: medium,
        `);
  });

  it('should render the ArticleContent Component with descriptionFontSize', () => {
    const { container } = render(<ArticleContent descriptionFontSize="medium" />);

    expect(container.lastChild).toHaveStyle(`
    descriptionFontSize: medium,
        `);
  });

  it('should render the ArticleContent Component with authorLineHeight', () => {
    const { container } = render(<ArticleContent authorLineHeight="single" />);

    expect(container.lastChild).toHaveStyle(`
    authorLineHeight: single,
        `);
  });
});
