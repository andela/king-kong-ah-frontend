import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fontSizes } from '<variables>/fonts';
import { backgroundColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';

/**
 * @description - StyledLink Component
 *
 * @prop {string} to
 * @prop {string} tag
 * @prop {boolean} isExternal
 * @prop {string} fontSize
 * @prop {string} margin
 * @prop {function} onClick
 * @prop {children} children
 *
 * @return {component} StyledLink
 */

const StyledLink = ({
  to,
  tag,
  isExternal,
  fontSize,
  margin,
  onClick,
  children,
}) => {
  return isExternal
    ? (<StyledLink.External
      target='_blank'
      href={to}
      tag={tag}
      fontSize={fontSize}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </StyledLink.External>)
    : (
      <StyledLink.Internal
        to={to}
        tag={tag}
        fontSize={fontSize}
        margin={margin}
        onClick={onClick}
      >
        {children}
      </StyledLink.Internal>
    );
};

StyledLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  tag: PropTypes.string,
  isExternal: PropTypes.bool,
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  onClick: PropTypes.func,
  margin: PropTypes.oneOf(Object.keys(spacing)),
};

StyledLink.defaultProps = {
  fontSize: 'normal',
  margin: 'zero',
  to: '#',
  isExternal: false,
  backgroundColor: 'transparent',
};

const linkStyle = ({
  margin, fontSize, theme, tag,
}) => `
    text-decoration: none;
    display: inline-block;
    text-align: center;
    transition: .5s border ease-in-out;
    border: solid 1px transparent;
    font-family: 'Roboto';
    margin: ${spacing[margin]};
    font-size: ${theme.fontSizes[fontSize]};
    color: ${theme.textColors.primary};
    background: ${(tag && backgroundColors.lightPink) || 'transparent'};
    padding: ${(tag && theme.spacing.xs) || '0'};
    box-shadow: ${(tag && theme.boxShadows.articleCard) || 'none'};
    width: ${(tag && theme.spacing.smd) || 'auto'};
    &:visited {
      color: ${theme.textColors.primary};
    }
    &:hover {
      border: ${tag && `solid 1px ${theme.textColors.primary}`};
    };
`;

StyledLink.Internal = styled(Link)`${linkStyle}`;

StyledLink.External = styled.a`${linkStyle}`;

export default StyledLink;
