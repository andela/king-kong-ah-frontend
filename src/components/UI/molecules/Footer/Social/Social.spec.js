import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Social from './Social.jsx';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <MemoryRouter>
      <Social {...props} />
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('Social', () => {
  const props = {
    title: 'FOLLOW US',
    icons: [
      {
        name: 'twitter',
        isExternal: true,
        to: 'https://testing/twitter',
      },
    ],
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
      padding-bottom: 1.3rem;
    `);
  });
});
