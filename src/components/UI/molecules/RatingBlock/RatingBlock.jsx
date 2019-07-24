import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import RatingsCount from '<atoms>/RatingsCount/RatingsCount';
import Text from '<atoms>/Text/Text';
import theme from '<variables>/mainTheme';

const RatingBlock = ({
  text, color, fontSize, counter,
}) => (
  <FlexContainer justifyContent='center' alignItems='center' padding='md'>
    <RatingsCount
      color={color}
      fontSize={fontSize}
      counter={counter}
    />
    <Text
      fontSize='sm'
      textTransform='uppercase'
      letterSpacing='xxxxs'
      fontWeight='heavy'
      textAlign='center'
    >
      {text}
    </Text>
  </FlexContainer>
);

RatingBlock.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(Object.keys(theme.fontSizes)),
  counter: PropTypes.number,
};

export default RatingBlock;
