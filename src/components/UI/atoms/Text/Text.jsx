import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontWeights, fontSizes } from '<variables>/fonts';
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
  padding,
  content,
  children,
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
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
};

Text.defaultProps = {
  display: 'inline',
  textTransform: 'none',
  content: 'false',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: 'normal',
};

Text.Container = styled.span`
  ${({
    padding,
    textTransform,
    content,
    fontSize,
    fontWeight,
    display,
    textAlign,
    color,
    theme,
  }) => `
    text-align: ${textAlign};
    color: ${theme.textColors[color]};
    display: ${display};
    padding: ${theme.spacing[padding] || '0'};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${theme.fontWeights[fontWeight]};
    font-family: ${(content === 'true' && 'Inknut Antiqua') || 'roboto'};
    text-transform: ${textTransform};

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
