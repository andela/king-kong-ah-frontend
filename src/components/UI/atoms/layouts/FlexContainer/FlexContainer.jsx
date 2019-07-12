import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<variables>/mainTheme';

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
  justifyContent,
  containerWidth,
  alignItems,
  flexDirection,
}) => (
  <FlexContainer.Container
    margin={margin}
    padding={padding}
    display={display}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    justifyContent={justifyContent}
    containerWidth={containerWidth}
    alignItems={alignItems}
    flexDirection={flexDirection}
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
    justifyContent,
    containerWidth,
    alignItems,
    flexDirection,
    theme: {
      spacing, backgroundColors, borderColors, boxShadows, width,
    },
  }) => `
    display: ${display};
    flex-direction:${flexDirection};
    background-color: ${backgroundColors[backgroundColor]};
    margin: ${spacing[margin]};
    padding: ${spacing[padding]};
    border-radius: ${spacing[borderRadius]};
    box-shadow: ${boxShadows[boxShadow]};
    border: 1px solid ${borderColors[borderColor] || 'transparent'};
    justify-content: ${justifyContent}
    width: ${width[containerWidth]}
    align-items: ${alignItems}
  `}
`;

FlexContainer.defaultProps = {
  display: 'flex',
  backgroundColor: 'white001',
  padding: 'sm',
  boxShadow: 'none',
  borderRadius: 'zero',
  margin: 'zero',
};

const {
  spacing, backgroundColors, borderColors, boxShadows, width,
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
  containerWidth: PropTypes.oneOf(Object.keys(width)),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  flexDirection: PropTypes.oneOf(['row', 'column']),
};

export default FlexContainer;
