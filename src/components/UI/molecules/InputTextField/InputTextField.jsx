import React from 'react';
import PropTypes from 'prop-types';
import InputField from '<atoms>/InputField/InputField';
import Text from '<atoms>/Text/Text';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Label from '<molecules>/label/Label';
import themeBorderRadius from '<variables>/border';
import width from '<variables>/width';
import { textColors } from '<variables>/colorPalette';

/**
 * @description - InputFormField component combined with an error field
 *
 * @prop {string} - placeholder
 * @prop {string | number} - value
 * @prop {string} - errorMessage
 * @prop {func} - onChange
 * @prop {string} - inputWidth
 *
 * @returns {JSX} - Input, Text, FlexContainer Component
 *
 * InputForm field Component
 */
const InputTextField = ({
  value,
  placeholder,
  onChange,
  errorMessage,
  inputWidth,
  borderRadius,
  type,
  name,
  label,
  color,
}) => {
  const id = btoa(`${name}-${value}`);

  return (

<<<<<<< HEAD
    <FlexContainer padding='xs'>
=======
    <FlexContainer padding='xsx'>
>>>>>>> feat(AuthForm): add form feature
      {label && <Label
        id={id}
        htmlFor={id}
        color = {color}
      >
        {label}
      </Label>}
      <InputField
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        inputWidth={inputWidth}
        borderRadius={borderRadius}
        error={errorMessage}
        onChange={onChange} />
      {errorMessage
        && <span><Text color='red' fontSize='small' display='block'>
          {errorMessage}
        </Text></span>}
    </FlexContainer>

  );
};

InputTextField.propTypes = {
  type: PropTypes.oneOf(['number', 'email', 'password', 'text']).isRequired,
  label: PropTypes.string,
  inputWidth: PropTypes.oneOf(Object.keys(width)),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  borderRadius: PropTypes.oneOf(Object.keys(themeBorderRadius)),
  onChange: PropTypes.func.isRequired,
  color: PropTypes.oneOf(Object.keys(textColors)),
};

InputTextField.defaultProps = {
  type: 'text',
  inputWidth: 'fullWidth',
  borderRadius: 'edgeRadius',
};

export default InputTextField;
