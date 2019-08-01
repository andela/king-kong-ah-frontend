import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import TextAreaField from './TextAreaField';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <TextAreaField
      value="Author's Haven"
      id='codex-editor'
      name='demo'
      onChange={() => true}
      {...props}
    />,
  );

  return { ...utils };
};

describe('TextAreaField Molecule', () => {
  it('should render a text area field molecule component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render text area field with children', () => {
    const { getByText } = setup();

    expect(getByText('Author\'s Haven')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = setup();

    expect(getByText('Author\'s Haven')).toHaveStyle(`
      padding: 0.9rem;
    `);
  });

  it('should render with error message', () => {
    const { getByText } = setup({ errorMessage: 'Test error message' });

    expect(getByText('Test error message'));
  });
});
