import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as iconSource from 'styled-icons/icomoon';
import { iconSizes, icons } from '<variables>/icons';
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
}) => {
  const IconType = iconSource[icons[iconName]];
  return (
    <Icon.Container
      data-testid={id}
      color={color}
      height={height}
      width={width}
      display={display}
      margin={margin}
      iconName={iconName}
    >
      <IconType />
    </Icon.Container>);
};

Icon.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(iconColors)),
  iconName: PropTypes.oneOf(Object.keys(icons)).isRequired,
  height: PropTypes.oneOf(Object.keys(iconSizes)),
  width: PropTypes.oneOf(Object.keys(iconSizes)),
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'none']),
  margin: PropTypes.oneOf(Object.keys(spacing)),
};

Icon.defaultProps = {
  iconName: 'search',
  height: 'normal',
  width: 'normal',
  display: 'block',
  margin: 'md',
  color: 'primary',
};

Icon.Container = styled.svg`
${({
    color,
    height,
    width,
    display,
    margin,
    theme,
  }) => `
color: ${theme.iconColors[color]};
height: ${theme.iconSizes[height]};
width: ${theme.iconSizes[width]};
display: ${display};
margin: ${theme.spacing[margin]};
`}
`;

export default Icon;
