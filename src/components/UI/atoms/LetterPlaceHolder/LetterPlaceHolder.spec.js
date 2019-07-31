import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import LetterPlaceHolder from './LetterPlaceHolder';

afterEach(cleanup);

describe('Placeholder', () => {
  it('should render the Overlay component', () => {
    const { container } = render(
      <LetterPlaceHolder> E </LetterPlaceHolder>,
    );
    expect(container).toBeTruthy();
  });
});
