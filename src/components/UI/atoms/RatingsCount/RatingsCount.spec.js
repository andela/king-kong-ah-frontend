import React from 'react';
import CountUp from 'react-countup';
import { render, cleanup } from '<src>/helpers/testUtils';
import Text from '<atoms>/Text/Text';
import RatingsCount from './RatingsCount';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (color) => {
  const utils = render(
    <RatingsCount
      color={color ? 'darkPurple' : 'pink'}>
      <CountUp end={100} duration={10} />
      <Text
        fontSize='xxlarge'
        fontWeight='heavy'
        textAlign='center'
      >
      +
      </Text>
    </RatingsCount>,
  );

  return {
    ...utils,
  };
};

describe('Ratings Count Atom', () => {
  it('should render the Ratings Count Component', () => {
    const { getByText } = setup();

    expect(getByText('+')).toBeTruthy();
  });

  it('should render children', () => {
    const { container } = setup();

    expect(container.children).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = setup();

    expect(getByText('+')).toHaveStyle(`
    color: "pink";
  `);
  });

  it('should change color when color prop is passed', () => {
    const { getByText } = setup('darkPink');

    expect(getByText('+')).toHaveStyle(`
    color: "darkPurple";
  `);
  });
});
