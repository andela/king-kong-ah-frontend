import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import DropDownHeader from './DropDownHeader';

afterEach(cleanup);

describe('DropDownHeader', () => {
  it('should render the DropDownHeader component', () => {
    const { container } = render(
      <DropDownHeader
        title='Emmanuel'
        subTitle='xyemmanuel@gmail.com'/>
      ,
    );
    expect(container).toBeTruthy();
  });
});
