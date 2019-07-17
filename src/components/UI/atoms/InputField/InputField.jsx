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
 * @prop {string} id - for label
 * @prop {string} color - color
 * @prop {bool} transparentHover - transparentHover
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
  id,
  placeholder,
  name,
  value,
  error,
  onFocus,
  fontSize,
  color,
  transparentHover,
  padding,
  backgroundColor,
  inputWidth,
  borderRadius,
}) => (
  <InputField.Container
    type={type}
    id={id}
    placeholder={placeholder}
    name={name}
    value={value}
    error={error}
    onFocus={onFocus}
    fontSize={fontSize}
    color={color}
    transparentHover={transparentHover}
    padding={padding}
    backgroundColor={backgroundColor}
    inputWidth={inputWidth}
    borderRadius={borderRadius}
    onChange={e => e.target.value}
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
  transparentHover: PropTypes.oneOf([true, false]),
  padding: PropTypes.oneOf(Object.keys(spacing)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  inputWidth: PropTypes.oneOf(Object.keys(width)),
  borderRadius: PropTypes.oneOf(Object.keys(themeBorderRadius)),
  id: PropTypes.string,
};

InputField.defaultProps = {
  padding: 'xs',
  fontSize: 'normal',
  color: 'primary',
  content: 'false',
  transparentHover: false,
  backgroundColor: 'lightPink',
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
    transparentHover,
  }) => `
    color: ${theme.textColors[color]};
<<<<<<< HEAD
<<<<<<< HEAD
    ::placeholder {
    color: ${theme.textColors.pink};
  }
=======
=======
>>>>>>> feat(AuthForm): add form feature

    ::placeholder {
      color: ${theme.textColors.pink};
    }
<<<<<<< HEAD
>>>>>>> feat(AuthForm): add form feature
=======
>>>>>>> feat(AuthForm): add form feature
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
      border: solid 1px ${(transparentHover
      && theme.backgroundColors.transparent) || theme.backgroundColors.primary};
    }
    &:focus {
      outline-style: none;
    }
`}
`;

export default InputField;
