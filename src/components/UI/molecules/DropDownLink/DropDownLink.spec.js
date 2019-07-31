import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '<src>/helpers/testUtils';
import DropDownLink from './DropDownLink';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (links, setBorder = false) => {
  const utils = render(
    <MemoryRouter>
      <DropDownLink border={setBorder}
        links={links}/>
    </MemoryRouter>,
  );

  return { ...utils };
};

describe('DropDownLink', () => {
  it('should render the DropDownLink component', () => {
    const { container } = setup(['Profile', 'Sign Out']);

    expect(container).toBeTruthy();
  });

  it('should render the DropDownLink component with border', () => {
    const { container } = setup(['Profile', 'Sign Out'], true);

    expect(container).toBeTruthy();
  });
});
