import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontSizes } from '<variables>/fonts';
import { backgroundColors, textColors } from '<variables>/colorPalette';
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
  marginleft,
  color,
  display,
}) => {
  const props = {
    tag,
    color,
    fontSize,
    margin,
    onClick,
    marginleft,
    display,
  };

  return isExternal
    ? (<StyledLink.External
      target='_blank'
      href={to}
      {...props}
    >
      {children}
    </StyledLink.External>)
    : (
      <StyledLink.Internal
        to={to}
        {...props}
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
  margin: PropTypes.string,
  marginleft: PropTypes.oneOf(Object.keys(spacing)),
  color: PropTypes.oneOf(Object.keys(textColors)),
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
};

StyledLink.defaultProps = {
  fontSize: 'normal',
  margin: 'zero',
  to: '#',
  isExternal: false,
  backgroundColor: 'transparent',
  color: 'primary',
  display: 'inline-block',
};

const linkStyle = ({
  margin, fontSize, theme, tag,
  marginleft, color, display,
}) => `
    text-decoration: none;
    display: ${display};
    transition: .5s border ease-in-out;
    border: solid 1px transparent;
    font-family: 'Roboto';
    margin: ${theme.spacing[margin]};
    font-size: ${theme.fontSizes[fontSize]};
    color: ${theme.textColors[color]};
    background: ${(tag && backgroundColors.lightPink) || 'transparent'};
    padding: ${(tag && theme.spacing.xs) || '0'};
    box-shadow: ${(tag && theme.boxShadows.articleCard) || 'none'};
    width: ${(tag && theme.spacing.smd) || 'auto'};
    margin-left: ${theme.spacing[marginleft]};
    &.active {
      color: ${(tag && theme.textColors.brightPink)};
      background-color: ${(tag && theme.backgroundColors.activePink)};
    };
    &:visited {
      color: ${theme.textColors[color]};
    }
    &:hover {
      color: ${(tag && theme.textColors.hoverPink)};
      background-color: ${(tag && theme.backgroundColors.dullRose)};
      border: ${tag && `solid 1px ${theme.backgroundColors.primary}`};
    };

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
`;

StyledLink.Internal = styled(NavLink)`${linkStyle}`;

StyledLink.External = styled.a`${linkStyle}`;

export default StyledLink;
