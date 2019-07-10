import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import FlexContainer from './FlexContainer';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const defaultProps = `
  padding: 1.6rem;
  display: flex;
  backgroundColor: white001;
  border: 1px solid tranparent;
`;

describe('FlexContainer', () => {
  it('should render the FlexContainer component', () => {
    const { container } = render(<FlexContainer><span/></FlexContainer>);

    expect(container.lastElementChild.innerHTML).toBe('<span></span>');
    expect(container.firstChild).toHaveStyle(defaultProps);
  });

  it('should render with box-radius', () => {
    const { container } = render(
      <FlexContainer borderRadius='xs'><span/></FlexContainer>,
    );

    expect(container.firstChild).toHaveStyle(`
      border-radius: 0.9rem;
      ${defaultProps}
    `);
  });

  it('should render with box-shadow', () => {
    const { container } = render(
      <FlexContainer boxShadow='articleCard'><span/></FlexContainer>,
    );

    expect(container.firstChild).toHaveStyle(`
      border-shadow: 16px 16px 32px #F0F0F0;
      ${defaultProps}
    `);
  });
});
