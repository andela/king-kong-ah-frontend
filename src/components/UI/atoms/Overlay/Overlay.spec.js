import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Overlay from './Overlay';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Overlay', () => {
  it('should render the Overlay component', () => {
    const { container } = render(
      <Overlay onClick={() => alert('hello')} />,
    );
    expect(container).toBeTruthy();
  });
});
