import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeights, fontSizes } from '<variables>/fonts';
import { textColors } from '<variables>/colorPalette';
import Text from '<atoms>/Text/Text';


/**
 * @description - InputFormField component combined with an error field
 *
 * @prop {children} - children
 *
 * @returns {JSX} - label
 *
 * InputLabel field Component
 */
const Label = ({
  children,
  display,
  color,
  id,
  fontSize,
  fontWeight,
}) => (
  <Label.Container htmlFor={id} display={display}>
    <Text
      content='true'
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </Text>
  </Label.Container>
);

Label.Container = styled.label`
${({
    fontSize,
    fontWeight,
    display,
    color,
    theme,
  }) => {
    return `
  color: ${theme.textColors[color]};
  display: ${display};
  font-size: ${theme.fontSizes[fontSize]};
  font-weight: ${theme.fontWeights[fontWeight]};
`;
  }}
`;


Label.propTypes = {
  id: PropTypes.string.isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

Label.defaultProps = {
  children: 'text',
  color: 'primary',
  display: 'block',
  fontWeight: 'normal',
  fontSize: 'normal',
};

export default Label;
