import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { borderColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';

/**
 * @description - Divider Component
 *
 * @prop {string} height - height
 * @prop {string} color - color
 * @prop {string} width - width
 * @prop {string} margin - margin

 *
 * @return {component} Divider
 */
const Divider = ({
  width,
  height,
  margin,
  color,
}) => (
  <Divider.Container
    width={width}
    height={height}
    margin={margin}
    color={color}
  >
  </Divider.Container>
);

Divider.propTypes = {
  width: PropTypes.oneOf(Object.keys(spacing)),
  height: PropTypes.oneOf(Object.keys(spacing)),
  margin: PropTypes.oneOf(Object.keys(spacing)),
  color: PropTypes.oneOf(Object.keys(borderColors)),
};

Divider.defaultProps = {
  color: 'primary',
  width: 'xxl',
  height: 'zero',
  margin: 'xs',
};

Divider.Container = styled.div`
${({
    width,
    height,
    margin,
    color,
    theme,
  }) => `
content: '';
display: inline-block;
border: 1px solid ${theme.borderColors[color]};
width: ${theme.spacing[width]};
height: ${theme.spacing[height]};
margin: ${theme.spacing[margin]};
`}
`;
export default Divider;
