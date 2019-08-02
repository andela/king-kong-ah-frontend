import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import TextArea from './TextArea';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <TextArea value="Author's Haven" id='codex-editor'/>,
  );

  return { ...utils };
};

describe('TextField Atom', () => {
  it('should render a text area atom component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render text area with children', () => {
    const { getByText } = setup();

    expect(getByText('Author\'s Haven')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = setup();

    expect(getByText('Author\'s Haven')).toHaveStyle(`
      height: 70vh;
      overflow-y: auto;
      border: solid 1px transparent;
      outline: none;
      transition: .5s border linear;
      box-sizing: border-box;
      resize: none;
    `);
  });
});
