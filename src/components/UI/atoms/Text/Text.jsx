import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontWeights, fontSizes, lineHeights } from '<variables>/fonts';
import { textColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';

/**
 * @description - Text Component
 *
 * @prop {string} fontSize - font Size
 * @prop {string} textAlign - text Align
 * @prop {string} color - color
 * @prop {string} display - display
 * @prop {string} textTransform - textTransform
 * @prop {string} content - content
 * @prop {string} fontWeight - fontWeight
 * @prop {string} padding - padding
 * @prop {string} lineheight - lineheight
 * @prop {children} children - children
 *
 * @return {component} Text
 */
const Text = ({
  fontSize,
  textAlign,
  color,
  display,
  textTransform,
  fontWeight,
  marginBottom,
  padding,
  content,
  lineHeight,
  children,
  letterSpacing,
  paddingTop,
}) => (
  <Text.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    textTransform={textTransform}
    content={content}
    padding={padding}
    fontWeight={fontWeight}
    letterSpacing={letterSpacing}
    paddingTop={paddingTop}
    lineHeight={lineHeight}
    marginBottom={marginBottom}
  >
    {children}
  </Text.Container>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  textTransform: PropTypes.oneOf([
    'none',
    'capitalize',
    'uppercase',
    'lowercase',
  ]),
  content: PropTypes.oneOf(['true', 'false']),
  padding: PropTypes.oneOf(Object.keys(spacing)),
  lineHeight: PropTypes.oneOf(Object.keys(lineHeights)),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
  letterSpacing: PropTypes.oneOf(Object.keys(spacing)),
  paddingTop: PropTypes.oneOf(Object.keys(spacing)),
  marginBottom: PropTypes.oneOf(Object.keys(spacing)),
};

Text.defaultProps = {
  display: 'inline',
  textTransform: 'none',
  content: 'false',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: 'normal',
  lineHeight: 'double',
  marginBottom: 'zero',
};

Text.Container = styled.span`
  ${({
    padding,
    textTransform,
    content,
    fontSize,
    fontWeight,
    marginBottom,
    display,
    textAlign,
    color,
    lineHeight,
    theme,
    letterSpacing,
    paddingTop,
  }) => `
    text-align: ${textAlign};
    line-height: ${theme.lineHeights[lineHeight]};
    color: ${theme.textColors[color]};
    display: ${display};
    padding: ${theme.spacing[padding] || '0'};
    margin-bottom: ${theme.spacing[marginBottom]};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${theme.fontWeights[fontWeight]};
    font-family: ${(content && 'Inknut Antiqua') || 'Roboto'};
    text-transform: ${textTransform};
    letter-spacing: ${theme.spacing[letterSpacing]};
    padding-top: ${theme.spacing[paddingTop] || '0'};

    @media ${theme.device.mobileS} {
      font-size: 1.2rem;
    }
    @media ${theme.device.mobileM} {
      font-size: 1.3rem;
    }
    @media ${theme.device.mobileL} {
      font-size: 1.3rem;
    }
    @media ${theme.device.tablet} {
      font-size: 1.3rem;
    }
`}
`;
export default Text;
