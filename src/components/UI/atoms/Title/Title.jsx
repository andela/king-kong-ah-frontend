import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSizes } from '<variables>/fonts';
import { textColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';

/**
 * @description - Title Component
 *
 * @prop {string} fontSize - font Size
 * @prop {string} textAlign - text Align
 * @prop {string} color - color
 * @prop {string} display - display
 * @prop {string} paddingBottom - padding-bottom
 * @prop {children} children - children
 *
 * @return {component} Title
 */
const Title = ({
  fontSize,
  textAlign,
  color,
  display,
  paddingBottom,
  children,
}) => (
  <Title.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    paddingBottom={paddingBottom}
  >
    {children}
  </Title.Container>
);

Title.propTypes = {
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
  paddingBottom: PropTypes.oneOf(Object.keys(spacing)),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

Title.defaultProps = {
  fontSize: 'normal',
  fontWeight: 'bold',
  display: 'block',
};

Title.Container = styled.span`
  ${({
    fontSize,
    textAlign,
    color,
    display,
    paddingBottom,
    theme,
  }) => `
    display: ${display};
    text-align: ${textAlign};
    color: ${theme.textColors[color]};
    padding-bottom: ${theme.spacing[paddingBottom]};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${theme.fontWeights.bold}

    @media ${theme.device.mobileS} {
      font-size: 1.8rem;
    }
    @media ${theme.device.mobileM} {
      font-size: 1.8rem;
    }
    @media ${theme.device.mobileL} {
      font-size: 1.8rem;
    }
    @media ${theme.device.tablet} {
      font-size: 1.8rem;
    }

`}
`;
export default Title;
