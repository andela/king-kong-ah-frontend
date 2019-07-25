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
 *
 * @return {component} FlexContainer
 */
const FlexContainer = ({
  children,
  height,
  margin,
  padding,
  paddingLeft,
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
    height={height}
    padding={padding}
    paddingLeft={paddingLeft}
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
    height,
    margin,
    padding,
    paddingLeft,
    display,
    borderRadius,
    boxShadow,
    backgroundColor,
    borderColor,
    justifyContent,
    containerWidth,
    alignItems,
    borderWidth,
    flexDirection,
    theme: {
      spacing, backgroundColors, borderColors, boxShadows,
    },
  }) => `
    height: ${height}
    display: ${display};
    background-color: ${backgroundColors[backgroundColor]};
    margin: ${spacing[margin]};
    padding: ${spacing[padding]};
    padding-left: ${spacing[paddingLeft]}
    border-radius: ${spacing[borderRadius]};
    box-shadow: ${boxShadows[boxShadow]};
    border: ${borderWidth} solid ${borderColors[borderColor] || 'transparent'};
    justify-content: ${justifyContent}
    flex-direction: ${flexDirection};
    width: ${width[containerWidth]}
    align-items: ${alignItems}

    @media ${theme.device.mobileS} {
      padding: ${spacing[padding] === '0rem' ? spacing[padding] : spacing.sm};
    }
    @media ${theme.device.mobileM} {
      padding: ${spacing[padding] === '0rem' ? spacing[padding] : spacing.sm};
    }
    @media ${theme.device.mobileL} {
      padding: ${spacing[padding] === '0rem' ? spacing[padding] : spacing.sm};
    }
    @media ${theme.device.tablet} {
      padding: ${spacing[padding] === '0rem' ? spacing[padding] : spacing.sm};
    }
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
  paddingLeft: PropTypes.oneOf(Object.keys(spacing)),
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
  height: PropTypes.string,
};

export default FlexContainer;
