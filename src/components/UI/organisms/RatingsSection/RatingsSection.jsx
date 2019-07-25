import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import RatingGroup from '<organisms>/RatingGroup/RatingGroup';
import RatingHeadings from '<molecules>/RatingHeadings/RatingHeadings';
import theme from '<variables>/mainTheme';

const RatingsSection = ({ fontSize }) => (
  <FlexContainer
    flexDirection='column'
    padding='sm'
    justifyContent='center'
    alignItems='center'
    paddingTop='xxl'
  >
    <RatingHeadings/>
    <RatingGroup fontSize={fontSize}/>
  </FlexContainer>
);

RatingsSection.propTypes = {
  fontSize: PropTypes.oneOf(Object.keys(theme.fontSizes)),
};

export default RatingsSection;
