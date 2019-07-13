import React from 'react';
import PropTypes from 'prop-types';
import InputField from '<atoms>/InputField/InputField';
import Text from '<atoms>/Text/Text';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import themeBorderRadius from '<variables>/border';
import width from '<variables>/width';

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
const InputFormField = ({
  value,
  placeholder,
  onChange,
  errorMessage,
  inputWidth,
  borderRadius,
  type,
  name,
  label,
  display,
}) => {
  return (

    <FlexContainer display={display}>
      <label htmlFor={name}>
        <Text
          content='true' color='primary' display='block'>{label}</Text></label>
      <InputField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        inputWidth={inputWidth}
        borderRadius={borderRadius}
        error={errorMessage}
        onChange={onChange} />
      {errorMessage
        && <span><Text color='error' fontSize='small' display='block'>
          {errorMessage}
        </Text></span>}
    </FlexContainer>

  );
};

InputFormField.propTypes = {
  type: PropTypes.oneOf(['number', 'email', 'password', 'text']).isRequired,
  label: PropTypes.string,
  inputWidth: PropTypes.oneOf(Object.keys(width)),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  borderRadius: PropTypes.oneOf(Object.keys(themeBorderRadius)),
  onChange: PropTypes.func.isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
};

InputFormField.defaultProps = {
  display: 'block',
};

export default InputFormField;
