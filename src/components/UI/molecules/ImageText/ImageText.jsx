/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import ArticleContent from '<molecules>/ArticleContent/ArticleContent';
import Image from '<atoms>/Image/Image';

/**
 * @description - ImageText Component
 *
 * @prop {string} imageUrl - imageUrl
 * @prop {string} title - title
 * @prop {string} author - author
 * @prop {string} description - description
 *
 * @return {component} ImageText
 */
const ImageText = ({
  imageUrl,
  title,
  author,
  description,
}) => {
  return (
    <FlexContainer
      flexDirection="row"
      height="70%"
      padding="zero"
    >
      <FlexContainer
        padding="zero"
        containerWidth="imageWidth"
      >
        <Image
          imageUrl={imageUrl}
          width="100%"
        />
      </FlexContainer>
      <ArticleContent
        title={title}
        author={author}
        description={description}
      />
    </FlexContainer>
  );
};

ImageText.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default ImageText;
