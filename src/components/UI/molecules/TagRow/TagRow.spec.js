import React from 'react';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import TagRow from './TagRow';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const tags = [
    {
      name: 'Adventure',
      id: '1',
    },
    {
      name: 'Love',
      id: '2',
    },
    {
      name: 'Finance',
      url: '3',
    },
  ];

  const handleClick = e => console.log(e.target.text);

  const utils = render(
    <MemoryRouter>
      <TagRow tags={tags} handleClick={handleClick} >Authors Haven</TagRow>
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('TagRow', () => {
  it('should render the TagRow component', () => {
    const { getByText } = setup();

    expect(getByText('Adventure')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = setup({});

    expect(getByText('Adventure')).toHaveStyle(`
      font-size: '1.6'
      display: inline-block;
      text-decoration: none;
    `);
  });

  it('should be clickable', () => {
    const { container, getByText } = setup();

    fireEvent.click(getByText('Adventure'));
    expect(container.firstChild).toBeTruthy();
  });
});
