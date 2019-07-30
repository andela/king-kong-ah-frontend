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
 * @prop {string} padding - padding
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
  padding,
  paddingTop,
  content,
  marginBottom,
  marginLeft,
  marginRight,
  hasBottomBorder,
  whiteSpace,
  titleWidth,
  children,
}) => (
  <Title.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    paddingBottom={paddingBottom}
    padding={padding}
    paddingTop={paddingTop}
    content={content}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    hasBottomBorder={hasBottomBorder}
    whiteSpace={whiteSpace}
    titleWidth={titleWidth}
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
  padding: PropTypes.oneOf(Object.keys(spacing)),
  paddingTop: PropTypes.oneOf(Object.keys(spacing)),
  content: PropTypes.oneOf(['true', 'false']),
  marginBottom: PropTypes.oneOf(Object.keys(spacing)),
  marginLeft: PropTypes.oneOf(Object.keys(spacing)),
  marginRight: PropTypes.oneOf(Object.keys(spacing)),
  hasBottomBorder: PropTypes.bool,
  whiteSpace: PropTypes.string,
  titleWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

Title.defaultProps = {
  fontSize: 'normal',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: 'zero',
  marginLeft: 'zero',
  marginRight: 'zero',
};

Title.Container = styled.span`
  ${({
    fontSize,
    textAlign,
    color,
    display,
    paddingBottom,
    padding,
    paddingTop,
    content,
    marginBottom,
    marginLeft,
    marginRight,
    hasBottomBorder,
    whiteSpace,
    titleWidth,
    theme,
  }) => `
    display: ${display};
    text-align: ${textAlign};
    color: ${theme.textColors[color]};
    padding: ${theme.spacing[padding]};
    padding-top: ${theme.spacing[paddingTop]};
    padding-bottom: ${theme.spacing[paddingBottom]};
    margin-bottom: ${theme.spacing[marginBottom]};
    margin-left: ${theme.spacing[marginLeft]};
    margin-right: ${theme.spacing[marginRight]};
    font-family: ${(content && 'Inknut Antiqua') || 'Roboto'};
    font-size: ${theme.fontSizes[fontSize]};
    font-family: ${(content && 'Inknut Antiqua') || 'roboto'};
    font-weight: ${theme.fontWeights.bold}
    margin-bottom: ${theme.spacing[marginBottom]};
    margin-left: ${theme.spacing[marginLeft]};
    margin-right: ${theme.spacing[marginRight]};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${theme.fontWeights.bold};
    border-bottom: ${hasBottomBorder ? '2px solid #B02091' : 'none'};
    white-space: ${whiteSpace};
    width: ${titleWidth};

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
