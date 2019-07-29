import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Menu from './Menu';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <MemoryRouter>
      <Menu {...props} />
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('Menu', () => {
  const props = {
    title: 'MENU',
    links: ['ARTICLES', 'GET STARTED'],
  };

  it('should render successfully', () => {
    const { container } = setup(props);

    expect(container).toBeTruthy();
  });

  it('should render the with Title component', () => {
    const { getByText } = setup(props);

    expect(getByText(props.title)).toHaveStyle(`
      color: #FFFFFF;
      font-size: 1.6rem;
      padding-bottom: 0.9rem;
    `);
  });
});
