import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import Footer from './Footer.jsx';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <MemoryRouter>
      <Footer {...props} />
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('Footer', () => {
  const props = {
    about: {
      title: 'Authors-Haven',
      textContent: [
        'Welcome to Authors Haven.',
      ],
    },
    menu: {
      title: 'MENU',
      links: ['ARTICLES'],
    },
    social: {
      title: 'FOLLOW US',
      icons: [
        {
          name: 'twitter',
          isExternal: true,
          to: 'https://cdn2.downdetector.com',
        },
      ],
    },
  };

  it('should render successfully', () => {
    const { container } = setup(props);

    expect(container).toBeTruthy();
  });

  it('should render the with About component', () => {
    const { getByText } = setup(props);

    expect(getByText(props.about.title)).toHaveStyle(`
      color: #FFFFFF;
      font-size: 3.2rem;
      padding-bottom: 1.3rem;
    `);
  });

  it('should render the with Menu component', () => {
    const { getByText } = setup(props);

    expect(getByText(props.menu.title)).toHaveStyle(`
      color: #FFFFFF;
      font-size: 1.6rem;
      padding-bottom: 0.9rem;
    `);
  });

  it('should render the with Social component', () => {
    const { getByText } = setup(props);

    expect(getByText(props.social.title)).toHaveStyle(`
      color: #FFFFFF;
      font-size: 1.6rem;
      padding-bottom: 1.3rem;
    `);
  });
});
