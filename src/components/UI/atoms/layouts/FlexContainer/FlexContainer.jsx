import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<variables>/mainTheme';
<<<<<<< HEAD
=======

>>>>>>> feat(AuthForm): add form feature
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
  justifyContent,
<<<<<<< HEAD
  containerWidth,
  alignItems,
=======
>>>>>>> feat(AuthForm): add form feature
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
    justifyContent={justifyContent}
<<<<<<< HEAD
    containerWidth={containerWidth}
    alignItems={alignItems}
=======
>>>>>>> feat(AuthForm): add form feature
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
    justifyContent,
<<<<<<< HEAD
    containerWidth,
    alignItems,
=======
>>>>>>> feat(AuthForm): add form feature
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
    justify-content: ${justifyContent}
    flex-direction: ${flexDirection};
    width: ${width[containerWidth]}
<<<<<<< HEAD
<<<<<<< HEAD
    align-items: ${alignItems}
=======
>>>>>>> feat(AuthForm): add form feature
=======
>>>>>>> feat(AuthForm): add form feature
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
<<<<<<< HEAD
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
=======
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end',
    'center', 'baseline', 'stretch']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end',
    'center', 'space-between', 'space-around']),
  flexDirection: PropTypes.oneOf(['row', 'column',
    'row-reverse', 'column-reverse']),
  containerWidth: PropTypes.oneOf(Object.keys(width)),
<<<<<<< HEAD
>>>>>>> feat(AuthForm): add form feature
=======
>>>>>>> feat(AuthForm): add form feature
};

export default FlexContainer;
