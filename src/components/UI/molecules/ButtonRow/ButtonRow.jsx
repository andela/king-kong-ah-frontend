/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import StyledLink from '<atoms>/StyledLink/StyledLink';
import Image from '<atoms>/Image/Image';
import { boxShadows } from '<variables>/shadows';

/**
 * @description - ButtonRow Component
 *
 * @prop {string} images - images
 *
 * @return {component} ButtonRow
 */
const ButtonRow = ({
  images,
}) => {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="row">
      {renderImages()}
    </FlexContainer>
  );

  function renderImages() {
    return images.map((image, index) => {
      return (
        <StyledLink key={index}>
          <Image
            imageUrl={image.url}
            width="58px"
            height="58px"
            boxShadow="icon"
            altText="social media button"
            margin="xs"
          />
        </StyledLink>
      );
    });
  }
};

ButtonRow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      boxShadow: PropTypes.oneOf(Object.keys(boxShadows)),
      altText: PropTypes.string,
      margin: PropTypes.string,
    }),
  ),
};

export default ButtonRow;
