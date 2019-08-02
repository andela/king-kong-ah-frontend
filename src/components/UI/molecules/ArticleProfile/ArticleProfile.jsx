/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import Button from '<atoms>/Button/Button';
import Text from '<atoms>/Text/Text';
import Title from '<atoms>/Title/Title';

/**
 * @description - ArticleProfile Component
 *
 * @prop {string} imageUrl - imageUrl
 * @prop {string} title - title
 * @prop {string} text - text
 * @prop {string} titleFontSize - titleSize
 * @prop {string} textFontSize - textSize
 *
 * @return {component} ArticleProfile
 */
const ArticleProfile = ({
  imageUrl,
  authorName,
  readingTime,
  titleFontSize,
  textFontSize,
  flexDirection,
  marginLeft,
}) => {
  return (
    <FlexContainer
      flexDirection={flexDirection}
      padding="zero"
      paddingTop="zero"
      marginLeft={marginLeft}
    >
      <FlexContainer
      >
        <Image
          imageUrl={imageUrl}
          width="90px"
          height="90px"
          boxShadow="image"
          borderColor="lightGrey"
          borderRadiusType="fullRadius"
        />
      </FlexContainer>
      <FlexContainer
        // containerWidth="minWidth"
      >
        {authorName && (renderTitle(titleFontSize))}
        {readingTime && (renderText(textFontSize))}
      </FlexContainer>
      <FlexContainer
        paddingTop="xxsm"
      >
        <Button
          buttonType="follow"
        >
            Follow
        </Button>
      </FlexContainer>
    </FlexContainer>
  );

  function renderTitle(size) {
    return (
      <Title
        fontSize={size}
        color="dark"
        content="true"
        paddingBottom="zero"
        whiteSpace="nowrap"
      >
        {authorName}
      </Title>
    );
  }

  function renderText(size) {
    return (
      <div>
        <Text
          fontSize={size}
          color="lightGrey"
          content="true"
        >
          {readingTime}
        </Text>
      </div>
    );
  }
};

ArticleProfile.defaultProps = {
  authorName: 'kyle zanderbroock',
  readingTime: 'May 1 . 9 mins read',
  imageUrl: 'https://images.pexels.com/photos/2420231/pexels-photo-2420231.jpeg',
  titleFontSize: 'title',
  textFontSize: 'xsmall',
  flexDirection: 'row',
};

ArticleProfile.propTypes = {
  imageUrl: PropTypes.string,
  authorName: PropTypes.string,
  readingTime: PropTypes.string,
  titleFontSize: PropTypes.string,
  textFontSize: PropTypes.string,
  flexDirection: PropTypes.oneOf(['row', 'column']),
  marginLeft: PropTypes.string,
};

export default ArticleProfile;
