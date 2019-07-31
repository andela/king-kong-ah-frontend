import React from 'react';
import { render, cleanup, fireEvent } from '<src>/helpers/testUtils';
import DropDownMenu from './DropDownMenu';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('DropDownMenu', () => {
  it('should render the DropDownMenu component', () => {
    const { container } = render(
      <DropDownMenu title='Emmanuel' subTitle='xyemma@gmail.com' />
      ,
    );
    expect(container).toBeTruthy();
  });
  it('should open the DropDown', () => {
    const { container, getByText } = render(
      <DropDownMenu title='Emmanuel' subTitle='xyemma@gmail.com' />
      ,
    );

    fireEvent.click(getByText('E'));

    expect(container).toBeTruthy();
  });
});
