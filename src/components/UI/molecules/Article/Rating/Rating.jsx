import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import StarRating from '<molecules>/StarRating/StarRating';


const Rating = ({
  title,
  ratingText,
  titleFontSize,
  titleColor,
  rating,
}) => (
  <FlexContainer
    padding="zero"
    alignItems="flex-start"
    paddingTop="zero"
  >
    <Fragment>
      <Title
        color={titleColor}
        textAlign='center'
        fontSize={titleFontSize}
        marginLeft="smdd"
        titleWidth="zero"
      >
        {title}
      </Title>
      <StarRating
        rating={rating}
        marginLeft="smddd"
        paddingTop="zero"
      />
      <Title
        marginLeft="smdd"
        color="iconPink"
      >
        {ratingText}
      </Title>
    </Fragment>
  </FlexContainer>
);

Rating.propTypes = {
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.string,
  titleColor: PropTypes.string,
  ratingText: PropTypes.string,
  rating: PropTypes.number,
};
export default Rating;
