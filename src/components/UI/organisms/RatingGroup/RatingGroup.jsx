import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import RatingBlock from '<molecules>/RatingBlock/RatingBlock';
import theme from '<variables>/mainTheme';

const RatingGroup = ({ fontSize }) => (
  <FlexContainer
    justifyContent='space-between'
    flexDirection='row'
    alignItems='center'
    padding='zero'
  >
    <RatingBlock
      text='articles read'
      counter={100}
      fontSize={fontSize}
    />
    <RatingBlock
      text='articles rated'
      counter={333}
      color="primary"
      fontSize={fontSize}
    />
    <RatingBlock
      text='articles commented'
      counter={112}
      color="darkPurple"
      fontSize={fontSize}
    />
  </FlexContainer>
);

RatingGroup.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.textColors)),
  fontSize: PropTypes.oneOf(Object.keys(theme.fontSizes)),
};
export default RatingGroup;
