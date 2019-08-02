/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Icon from '<atoms>/Icon/Icon';

/**
 * @description - StarRating Component
 *
 * @prop {string} icon - images
 *
 * @return {component} StarRating
 */
const StarRating = ({
  rating, marginLeft, paddingTop,
}) => {
  return (
    <FlexContainer
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      padding='zero'
      marginLeft={marginLeft}
      paddingTop={paddingTop}
    >
      {renderRating()}
    </FlexContainer>
  );

  function renderRating() {
    const iconHolder = [...new Array(5)].map(() => 'starEmpty');
    if (rating > 0) {
      const ratingIcon = [...new Array(rating)].map(() => 'starFull');
      iconHolder.splice(0, rating, ...ratingIcon);
    }
    return iconHolder.map((icons, index) => {
      return (
        <Icon
          key={index}
          color='gold'
          iconName={icons}
          width='smaller'
          height='smaller'
          margin='icon'
          paddingBottom='smm'
        />
      );
    });
  }
};

StarRating.propTypes = {
  rating: PropTypes.number,
  marginLeft: PropTypes.string,
  paddingTop: PropTypes.string,
};

StarRating.defaultProp = {
  rating: 0,
};

export default StarRating;
