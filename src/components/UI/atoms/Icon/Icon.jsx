import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as iconSource from 'styled-icons/icomoon';
import { iconSizes, iconNames } from '<variables>/icons';
import { iconColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';


/**
 * @description - Icon Component
 *
 * @prop {string} color - color
 * @prop {string} height - height
 * @prop {string} width - width
 * @prop {string} display - display
 * @prop {string} margin - margin
 * @prop {string} marginTop - marginTop
 * @prop {string} marginLeft - marginLeft
 * @prop {string} icon - icon
 *
 * @return {component} Icon
 */
const Icon = ({
  id,
  color,
  height,
  width,
  display,
  margin,
  iconName,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  const IconType = iconSource[iconNames[iconName]];
  return (
    <Icon.Container
      data-testid={id}
      color={color}
      height={height}
      width={width}
      display={display}
      margin={margin}
      iconName={iconName}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <IconType />
    </Icon.Container>);
};

Icon.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(iconColors)),
  iconName: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
  height: PropTypes.oneOf(Object.keys(iconSizes)),
  width: PropTypes.oneOf(Object.keys(iconSizes)),
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
  margin: PropTypes.oneOf(Object.keys(spacing)),
  marginTop: PropTypes.oneOf(Object.keys(spacing)),
  marginLeft: PropTypes.oneOf(Object.keys(spacing)),
  marginRight: PropTypes.oneOf(Object.keys(spacing)),
};

Icon.defaultProps = {
  iconName: 'search',
  height: 'normal',
  width: 'normal',
  display: 'block',
  margin: 'md',
  color: 'primary',
};

Icon.Container = styled.div`
${({
    color,
    height,
    width,
    display,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    theme,
  }) => `
color: ${theme.iconColors[color]};
height: ${theme.iconSizes[height]};
width: ${theme.iconSizes[width]};
display: ${display};
margin: ${theme.spacing[margin]};
margin-top: ${theme.spacing[marginTop]};
margin-left: ${theme.spacing[marginLeft]};
margin-right: ${theme.spacing[marginRight]};

@media ${theme.device.mobileS} {
  width: 1.3rem;
  height: 1.3rem;
  margin-left: ${marginLeft ? theme.spacing.xxxs : 0};
  margin-right: ${marginRight ? theme.spacing.xxxs : 0};
}
@media ${theme.device.mobileM} {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: ${marginLeft ? theme.spacing.xxxs : 0};
  margin-right: ${marginRight ? theme.spacing.xxxs : 0};
}
@media ${theme.device.mobileL} {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: ${marginLeft ? theme.spacing.xxxs : 0};
  margin-right: ${marginRight ? theme.spacing.xxxs : 0};
}
@media ${theme.device.tablet} {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: ${marginLeft ? theme.spacing.xxxs : 0};
  margin-right: ${marginRight ? theme.spacing.xxxs : 0};
}
`}
`;

export default Icon;
