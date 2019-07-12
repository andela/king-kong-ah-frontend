import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from '<variables>/border';
import { boxShadows } from '<variables>/shadows';
import { borderColors } from '<variables>/colorPalette';

/**
 * @description - Image Component
 *
 * @prop {string} width - image width
 * @prop {string} height - image height
 * @prop {string} imageUrl - image source
 * @prop {string} altText - alt text
 * @prop {string} boxShadow - shadowType
 * @prop {boolean} borderColor- borderColor
 * @prop {string} borderRadiusType - borderRadiusType
 * @return {component} Image
 */

const Image = (
  {
    id,
    imageUrl,
    altText,
    width,
    height,
    boxShadow,
    borderRadiusType,
    borderColor,
  },
) => {
  return <Image.Container
    src={imageUrl}
    data-testid={id}
    alt={altText}
    width={width}
    height={height}
    boxShadow={boxShadow}
    borderRadiusType={borderRadiusType}
    borderColor={borderColor}
  />;
};


Image.Container = styled.img`
${({
    width,
    height,
    boxShadow,
    borderRadiusType,
    borderColor,
    theme,
  }) => {
    return `
  width: ${width};
  min-height: ${height};
  box-shadow:${theme.boxShadows[boxShadow]};
  border: ${`1px solid ${theme.borderColors[borderColor]}`};
  border-radius:${theme.borderRadius[borderRadiusType]};
  `;
  }}`;

Image.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  boxShadow: PropTypes.oneOf(Object.keys(boxShadows)),
  borderColor: PropTypes.oneOf(Object.keys(borderColors)),
  borderRadiusType: PropTypes.oneOf(Object.keys(borderRadius)),
};

Image.defaultProps = {
  id: 'mockImage',
  width: '100%',
  height: '100%',
  imageUrl: 'https://via.placeholder.com/150',
  altText: 'place holder image',
  border: '1px solid #DDDDDD',
  boxShadow: 'image',
};

export default Image;
