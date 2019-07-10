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
 * @prop {string} maxWidth - maxWidth
 * @prop {string} margin - margin

 *
 * @return {component} Divider
 */
const Divider = ({
  maxWidth,
  height,
  margin,
  color,
}) => (
  <Divider.Container
    maxWidth={maxWidth}
    height={height}
    margin={margin}
    color={color}
  >
  </Divider.Container>
);

Divider.propTypes = {
  maxWidth: PropTypes.oneOf(Object.keys(spacing)),
  height: PropTypes.oneOf(Object.keys(spacing)),
  margin: PropTypes.oneOf(Object.keys(spacing)),
  color: PropTypes.oneOf(Object.keys(borderColors)),
};

Divider.defaultProps = {
  color: 'primary',
  maxWidth: 'xxl',
  height: 'zero',
  margin: 'md',
};

Divider.Container = styled.div`
${({
    maxWidth,
    height,
    margin,
    color,
    theme,
  }) => `
border: 1px solid ${theme.borderColors[color]}
max-width: ${theme.spacing[maxWidth]}
height: ${theme.spacing[height]}
margin: ${theme.spacing[margin]}
`}
`;
export default Divider;
