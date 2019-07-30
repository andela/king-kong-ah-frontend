/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import ArticleProfile from '<molecules>/ArticleProfile/ArticleProfile';
import Title from '<atoms>/Title/Title';

/**
 * @description - ArticleHeading Component
 *
 * @prop {string} title - title
 * @prop {string} titleFontSize - titleSize
 *
 * @return {component} ArticleHeading
 */
const ArticleHeading = ({
  title, titleFontSize, readingTime, authorName,
}) => {
  return (
    <FlexContainer flexDirection="column" padding="zero" marginLeft="smd">
      <FlexContainer margin="xxsm" padding="xs" marginBottom="zero">
        {title && renderTitle(titleFontSize)}
      </FlexContainer>
      <FlexContainer paddingTop="zero">
        <ArticleProfile readingTime={readingTime} authorName={authorName} />
      </FlexContainer>
    </FlexContainer>
  );

  function renderTitle(size) {
    return (
      <div>
        <Title fontSize={size} color="dark">
          {title}
        </Title>
      </div>
    );
  }
};

ArticleHeading.defaultProps = {
  title: 'The love of money',
  titleFontSize: 'xlarge',
};

ArticleHeading.propTypes = {
  title: PropTypes.string,
  titleFontSize: PropTypes.string,
  readingTime: PropTypes.string,
  authorName: PropTypes.string,
};

export default ArticleHeading;
