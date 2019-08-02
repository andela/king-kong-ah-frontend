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
 * @prop {string} paddingTop- padding top
 * @prop {string} marginBottom - margin bottom
 * @prop {string} marginLeft - margin left
 *
 * @return {component} FlexContainer
 */
const FlexContainer = ({
  children,
  height,
  margin,
  marginBottom,
  marginLeft,
  padding,
  paddingLeft,
  paddingTop,
  display,
  backgroundColor,
  borderColor,
  borderRadius,
  boxShadow,
  justifyContent,
  containerWidth,
  alignItems,
  flexDirection,
  textAlign,
  overflowX,
  overflowY,
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
    paddingTop={paddingTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    textAlign={textAlign}
    overflowX={overflowX}
    overflowY={overflowY}
  >
    {children}
  </FlexContainer.Container>
);

FlexContainer.Container = styled.div`
  ${({
    height,
    margin,
    marginBottom,
    marginLeft,
    padding,
    paddingLeft,
    paddingTop,
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
    textAlign,
    overflowX,
    overflowY,
    theme: {
      spacing, backgroundColors, borderColors, boxShadows,
    },
  }) => `
    height: ${height};
    display: ${display};
    background-color: ${backgroundColors[backgroundColor]};
    margin: ${spacing[margin]};
    margin-bottom: ${spacing[marginBottom]};
    margin-left: ${spacing[marginLeft]};
    padding: ${spacing[padding]};
    padding-left: ${spacing[paddingLeft]};
    padding-top: ${spacing[paddingTop]};
    border-radius: ${spacing[borderRadius]};
    box-shadow: ${boxShadows[boxShadow]};
    border: ${borderWidth} ${borderColors[borderColor] || 'transparent'} solid;
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
    width: ${width[containerWidth]};
    align-items: ${alignItems};
    height: ${height};
    text-align: ${textAlign};
    overflow-x: ${overflowX}
    overflow-y: ${overflowY}

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
  `}`;

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
  marginBottom: PropTypes.oneOf(Object.keys(spacing)),
  marginLeft: PropTypes.oneOf(Object.keys(spacing)),
  padding: PropTypes.oneOf(Object.keys(spacing)),
  paddingLeft: PropTypes.oneOf(Object.keys(spacing)),
  paddingTop: PropTypes.oneOf(Object.keys(spacing)),
  backgroundColor: PropTypes.oneOf(Object.keys(backgroundColors)),
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  borderColor: PropTypes.oneOf(Object.keys(borderColors)),
  borderRadius: PropTypes.oneOf(Object.keys(spacing)),
  boxShadow: PropTypes.oneOf(Object.keys(boxShadows)),
  containerWidth: PropTypes.oneOf(Object.keys(width)),
  textAlign: PropTypes.string,
  overflowX: PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']),
  overflowY: PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']),
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
