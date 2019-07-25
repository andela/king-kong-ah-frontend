import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import styled from 'styled-components';
import theme from '<variables>/mainTheme';
import Text from '<atoms>/Text/Text';

/**
 * @description - Rating Component
 *
 * @prop {string} color - color
 * @prop {children} children - children
 *
 * @return {component} Rating
 */
const Rating = ({
  color,
  fontSize,
  counter,
}) => (
  <Rating.Container
    color={color}
    fontSize={fontSize}
  >
    <CountUp end={counter} duration={5} />
    <Text
      fontSize='xxlarge'
      fontWeight='heavy'
      textAlign='center'
    >
      +
    </Text>
  </Rating.Container>
);

Rating.defaultProps = {
  display: 'block',
  content: 'true',
  fontWeight: 'heavy',
  fontSize: 'xlarge',
  color: 'pink',
};

Rating.Container = styled.span`
${({ color, fontSize }) => `
color: ${theme.textColors[color]};
font-size: ${theme.fontSizes[fontSize]};
font-weight: ${theme.fontWeights.heavy};
font-family: 'M PLUS 1p';

@media ${theme.device.mobileS} {
    font-size: 2.5rem;
  }
  @media ${theme.device.mobileM} {
    font-size: 2.5rem;
  }
  @media ${theme.device.mobileL} {
    font-size: 3rem;
  }
  @media ${theme.device.tablet} {
    font-size: 3rem;
  }
`}
`;

Rating.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.textColors)),
  fontSize: PropTypes.oneOf(Object.keys(theme.fontSizes)),
  counter: PropTypes.number,

};
export default Rating;
