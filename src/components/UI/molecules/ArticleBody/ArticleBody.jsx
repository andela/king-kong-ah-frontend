/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import Text from '<atoms>/Text/Text';

/**
 * @description - ArticleBody Component
 *
 * @prop {string} imageUrl - imageUrl
 * @prop {string} text - text
 * @prop {string} textFontSize - textSize
 *
 * @return {component} ArticleBody
 */
const ArticleBody = ({ imageUrl, text }) => {
  return (
    <FlexContainer
      flexDirection="column"
      padding="zero"
      containerWidth="minWidth"
      marginLeft="smd"
    >
      <FlexContainer>
        {imageUrl ? (
          <Image
            imageUrl={imageUrl}
            width="987px"
            height="437px"
            boxShadow="image"
            borderColor="lightGrey"
          />
        ) : null}
      </FlexContainer>
      <FlexContainer>{text && renderText()}</FlexContainer>
    </FlexContainer>
  );

  function renderText() {
    return (
      <div>
        <Text fontSize="title" content={null} color="dark">
          {text}
        </Text>
      </div>
    );
  }
};

ArticleBody.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
};

export default ArticleBody;
