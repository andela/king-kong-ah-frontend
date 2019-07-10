import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSizes } from '<variables>/fonts';
import { textColors, backgroundColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';
import themeBorderRadius from '<variables>/border';
import width from '<variables>/width';

/**
 * @description - Input field Component
 *
 * @prop {string} fontSize - font Size
 * @prop {string} color - color
 * @prop {string} type - type
 * @prop {string} placeholder - placeholder
 * @prop {string} name - name
 * @prop {string} onChange - onChange function
 * @prop {string} error - validation error
 * @prop {string} onFocus - onFocus function
 * @prop {string} padding - padding
 *
 * @return {component} Text
 */
const InputField = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  onFocus,
  fontSize,
  color,
  padding,
  backgroundColor,
  inputWidth,
  borderRadius,
}) => (
  <InputField.Container
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    error={error}
    onFocus={onFocus}
    fontSize={fontSize}
    color={color}
    padding={padding}
    backgroundColor={backgroundColor}
    inputWidth={inputWidth}
    borderRadius={borderRadius}
  />
);

InputField.propTypes = {
  type: PropTypes.oneOf(['number', 'email', 'password', 'text']).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  onFocus: PropTypes.func,
  backgroundColor: PropTypes.oneOf(Object.keys(backgroundColors)),
  color: PropTypes.oneOf(Object.keys(textColors)),
  padding: PropTypes.oneOf(Object.keys(spacing)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  inputWidth: PropTypes.oneOf(Object.keys(width)),
  borderRadius: PropTypes.oneOf(Object.keys(themeBorderRadius)),
};

InputField.defaultProps = {
  padding: 'zero',
  fontSize: 'normal',
  color: 'primary',
  content: 'false',
  background: 'lightPink',
};

InputField.Container = styled.input`
  ${({
    padding,
    fontSize,
    color,
    theme,
    backgroundColor,
    inputWidth,
    borderRadius,
  }) => `
    color: ${theme.textColors[color]};
    padding: ${theme.spacing[padding]};
    width: ${theme.width[inputWidth]};
    font-size: ${theme.fontSizes[fontSize]};
    background-color: ${theme.backgroundColors[backgroundColor]};
    border-radius: ${theme.borderRadius[borderRadius]}
    border: solid 1px transparent;
    outline: none;
    transition: .5s border linear;
    box-sizing: border-box;
    &:hover {
      border: solid 1px ${theme.textColors[color]};
    }
`}
`;

export default InputField;
