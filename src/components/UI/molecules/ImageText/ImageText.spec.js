/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import ImageText from './ImageText';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
  const utils = render(
    <ImageText {...props}/>,
  );

  return { ...utils };
};

describe('ImageText', () => {
  it('should render the ImageText component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render ImageText with title', () => {
    const { getByText } = render(<ImageText title='City by the bay' />);

    expect(getByText('City by the bay')).toBeTruthy();
  });

  it('should render ImageText with author', () => {
    const { getByText } = render(<ImageText author='By : Emmy Joan' />);

    expect(getByText('By : Emmy Joan')).toBeTruthy();
  });

  it('should render ImageText with description', () => {
    const { getByText } = render(<ImageText description='This is a description' />);

    expect(getByText('This is a description')).toBeTruthy();
  });
});
