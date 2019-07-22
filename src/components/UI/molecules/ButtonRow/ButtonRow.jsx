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
      flexDirection="row"
      padding="zero">
      {renderImages()}
    </FlexContainer>
  );

  function renderImages() {
    return images.map((image, index) => {
      return (
        <StyledLink
          key={index}
          isExternal={image.isExternal}
          to={image.to}
        >
          <Image
            imageUrl={image.url}
            width="5.0rem"
            height="5.0rem"
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
      isExternal: PropTypes.bool.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

export default ButtonRow;
