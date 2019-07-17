import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<variables>/mainTheme';

import width from '<variables>/width';

/**
 * @description - Container Component
 *
 * @prop {node} children - children
 * @prop {string} margin - margin
 * @prop {string} padding - padding
 * @prop {string} display - display
 * @prop {string} backgroundColor - background color
 * @prop {string} borderColor - border color
 * @prop {string} borderRadius - add border radius
 * @prop {string} boxShadow - boxShadow
 * @prop {string} alignItems - alignItems
 * @prop {string} justifyContent - justifyContent
 * @prop {string} flexDirection - flex direction
 * @prop {string} containerWidth - container width
 *
 * @return {component} FlexContainer
 */
const FlexContainer = ({
  children,
  margin,
  padding,
  display,
  backgroundColor,
  borderColor,
  borderRadius,
  boxShadow,
  alignItems,
  justifyContent,
  flexDirection,
  containerWidth,
}) => (
  <FlexContainer.Container
    margin={margin}
    padding={padding}
    display={display}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    alignItems={alignItems}
    justifyContent={justifyContent}
    flexDirection={flexDirection}
    containerWidth={containerWidth}
  >
    {children}
  </FlexContainer.Container>
);

FlexContainer.Container = styled.div`
  ${({
    margin,
    padding,
    display,
    borderRadius,
    boxShadow,
    backgroundColor,
    borderColor,
    alignItems,
    justifyContent,
    flexDirection,
    theme: {
      spacing, backgroundColors, borderColors, boxShadows,
    },
    containerWidth,
  }) => `
    display: ${display};
    background-color: ${backgroundColors[backgroundColor]};
    margin: ${spacing[margin]};
    padding: ${spacing[padding]};
    border-radius: ${spacing[borderRadius]};
    box-shadow: ${boxShadows[boxShadow]};
    border: 1px solid ${borderColors[borderColor] || 'transparent'};
    align-items: ${alignItems}
    justify-content: ${justifyContent}
    flex-direction: ${flexDirection};
    width: ${containerWidth}
  `}
`;

FlexContainer.defaultProps = {
  display: 'flex',
  backgroundColor: 'white001',
  padding: 'sm',
  boxShadow: 'none',
  borderRadius: 'zero',
  margin: 'zero',
  flexDirection: 'column',
};

const {
  spacing, backgroundColors, borderColors, boxShadows,
} = theme;

FlexContainer.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.oneOf(Object.keys(spacing)),
  padding: PropTypes.oneOf(Object.keys(spacing)),
  backgroundColor: PropTypes.oneOf(Object.keys(backgroundColors)),
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  borderColor: PropTypes.oneOf(Object.keys(borderColors)),
  borderRadius: PropTypes.oneOf(Object.keys(spacing)),
  boxShadow: PropTypes.oneOf(Object.keys(boxShadows)),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end',
    'center', 'baseline', 'stretch']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end',
    'center', 'space-between', 'space-around']),
  flexDirection: PropTypes.oneOf(['row', 'column',
    'row-reverse', 'column-reverse']),
  containerWidth: PropTypes.oneOf(Object.keys(width)),
};

export default FlexContainer;
