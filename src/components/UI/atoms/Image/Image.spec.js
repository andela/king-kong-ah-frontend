/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import Image from './Image';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const defaultProps = {
  imageUrl: '',
  altText: '',
  id: 'mockImage',
};

const setUp = (props) => {
  const utils = render(<Image {...defaultProps} {...props} />);
  return utils;
};

describe('Image', () => {
  it('should render the Image component with default prop', () => {
    const { container } = setUp();
    expect(container).toBeTruthy();
  });

  it('should render with the Image url props supplied', () => {
    const { queryByTestId } = setUp({ imageUrl: 'https://assets-ouch.icons8.com/preview/501/57c82ec0-5e6d-423e-b594-5d93a5f5f44b.png' });


    const image = queryByTestId('mockImage');

    expect(image.getAttribute('src')).toBe('https://assets-ouch.icons8.com/preview/501/57c82ec0-5e6d-423e-b594-5d93a5f5f44b.png');
  });

  it('should render the Image component default borderColor', () => {
    const { queryByTestId } = setUp({ borderColor: 'primary' });
    const image = queryByTestId('mockImage');

    expect(image).toHaveStyle(`
    border: 1px solid #B02091;
  `);
  });

  it('should render Image component and return alt Text', () => {
    const { getByAltText } = setUp({ altText: 'pizza' });

    expect(getByAltText('pizza')).toBeTruthy();
  });

  it('should render Image component with image box shadow', () => {
    const { queryByTestId } = setUp({ boxShadow: 'image' });

    const image = queryByTestId('mockImage');
    expect(image).toHaveStyle(`
    box-shadow: 0px 4px 10px #CCCCCC;
  `);
  });
});
