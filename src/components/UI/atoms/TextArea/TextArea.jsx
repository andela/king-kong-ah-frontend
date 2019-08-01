import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizes } from '<variables>/fonts';
import { textColors } from '<variables>/colorPalette';
import spacing from '<variables>/spacing';
import width from '<variables>/width';
/**
 * @description - Input field Component
 *
 * @prop {string} fontSize - font Size
 * @prop {string} id - for label
 * @prop {string} color - color
 * @prop {bool} transparentHover - transparentHover
 * @prop {string} placeholder - placeholder
 * @prop {string} name - name
 * @prop {string} onChange - onChange function
 * @prop {string} error - validation error
 * @prop {string} onFocus - onFocus function
 * @prop {string} padding - padding
 *
 * @return {component} Text
 */
const TextArea = ({
  id,
  placeholder,
  name,
  value,
  error,
  onFocus,
  fontSize,
  transparentHover,
  padding,
  inputWidth,
  onChange,
}) => (
  <TextArea.Container
    id={id}
    placeholder={placeholder}
    name={name}
    error={error}
    onFocus={onFocus}
    fontSize={fontSize}
    transparentHover={transparentHover}
    padding={padding}
    inputWidth={inputWidth}
    onChange={onChange}
  >
    {value}
  </TextArea.Container>
);

const handleChange = e => e.target.value;

TextArea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  onFocus: PropTypes.func,
  transparentHover: PropTypes.oneOf([true, false]),
  padding: PropTypes.oneOf(Object.keys(spacing)),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  inputWidth: PropTypes.oneOf(Object.keys(width)),
};

TextArea.defaultProps = {
  padding: 'xs',
  fontSize: 'normal',
  content: 'false',
  transparentHover: false,
  onChange: handleChange,
};

TextArea.Container = styled.div`
  ${({
    padding,
    fontSize,
    theme,
    inputWidth,
    transparentHover,
  }) => `
    color: ${theme.textColors.darkGrey};
    ::placeholder {
      color: ${theme.textColors.pink};
    }
    padding: ${theme.spacing[padding]};
    width: ${theme.width[inputWidth]};
    height: 70vh;
    overflow-y: auto;
    font-size: ${theme.fontSizes[fontSize]};
    background-color: ${theme.backgroundColors.grey};
    border: solid 1px transparent;
    outline: none;
    transition: .5s border linear;
    box-sizing: border-box;
    resize: none;
    &:hover {
      border: solid 1px ${(transparentHover
      && theme.backgroundColors.transparent) || theme.backgroundColors.primary};
    }
    &:focus {
      outline-style: none;
    }
`}`;

export default TextArea;
