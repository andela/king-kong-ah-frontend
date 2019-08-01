import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import mockIcon from '<fixtures>/icons/mockIcon';
import IconRow from './IconRow.jsx';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

jest.mock('<fixtures>/icons/Star.svg', () => jest.fn(() => mockIcon));


describe('IconRow', () => {
  const props = [
    {
      name: 'twitter',
      isExternal: true,
      to: 'https://twitter.com',
    },
  ];

  it('should render successfully', () => {
    const { container } = render(<IconRow icons={props} />);

    expect(container).toBeTruthy();
  });

  it('should render color white', () => {
    const { queryByTestId } = render(<IconRow icons={props} />);

    expect(queryByTestId(`${props[0].name}0`)).toHaveStyle(`
      color: #FFFFFF;
      height: 2.5rem;
      width: 2.5rem;
    `);
  });
});
