import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import ButtonRow from './ButtonRow';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const images = [
  {
    name: 'facebook',
    url: 'https://png.pngtree.com/element_our/sm/20180301/sm_5a9794da1b10e.png',
  },
  {
    name: 'google',
    url: 'http://pluspng.com/img-png/google-logo-png-open-2000.png',
  },
];

const setup = (props) => {
  const utils = render(
    <MemoryRouter>
      <ButtonRow images={images} {...props}/>
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('ButtonRow', () => {
  it('should render the ButtonRow component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render the ButtonRow component with default props', () => {
    const { container } = setup();

    expect(container.lastChild).toHaveStyle(`
    height: 58px,
    width: 58px,
    `);
  });
});
