/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import Text from '<atoms>/Text/Text';
import { fontSizes, lineHeights } from '<variables>/fonts';

/**
 * @description - ArticleContent Component
 *
 * @prop {string} title - title
 * @prop {string} author - author
 * @prop {string} description - description
 * @prop {string} titleFontSize - titleFontSize
 * @prop {string} authorFontSize - authorFontSize
 * @prop {string} descriptionFontSize - descriptionFontSize
 *
 * @return {component} ArticleContent
 */
const ArticleContent = ({
  title,
  author,
  description,
  authorLineHeight,
  titleFontSize,
  authorFontSize,
  descriptionFontSize,
}) => {
  return (
    <FlexContainer
      containerWidth="articleWidth"
      backgroundColor="primary"
      padding="xxl"
      paddingLeft="xl"
    >
      <FlexContainer
        backgroundColor="primary"
      >
        {title && (renderTitle(titleFontSize))}
        {author && (renderAuthor(authorFontSize, authorLineHeight))}
      </FlexContainer>
      <FlexContainer
        backgroundColor="primary"
      >
        {description && (renderDescription(descriptionFontSize))}
      </FlexContainer>
    </FlexContainer>
  );

  function renderTitle(size) {
    return (
      <Title
        fontSize={size}
        color="lightBrown"
        content="true"
        paddingBottom="zero"
      >
        {title}
      </Title>
    );
  }

  function renderAuthor(size, height) {
    return (
      <div>
        <Text
          fontSize={size}
          color="lightBrown"
          content="true"
          lineHeight={height}
        >
          {author}
        </Text>
      </div>
    );
  }

  function renderDescription(size) {
    return (
      <div>
        <Text
          fontSize={size}
          color="white001"
          content="true"
        >
          {description}
        </Text>
      </div>
    );
  }
};


ArticleContent.defaultProps = {
  titleFontSize: 'xlarge',
  authorFontSize: 'medx',
  descriptionFontSize: 'medium',
  authorLineHeight: 'zero',
};

ArticleContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  titleFontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  authorFontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  descriptionFontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  authorLineHeight: PropTypes.oneOf(Object.keys(lineHeights)),
};

export default ArticleContent;
