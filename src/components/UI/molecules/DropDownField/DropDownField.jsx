import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '<atoms>/DropDown/DropDown';
import Text from '<atoms>/Text/Text';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import themeBorderRadius from '<variables>/border';
import width from '<variables>/width';

/**
 * @description - DropDownField component combined with an error field
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
const DropDownField = ({
  list,
  value,
  onChange,
  errorMessage,
  inputWidth,
  borderRadius,
  name,
  label,
}) => (
  <FlexContainer padding='zero'>
    <DropDown
      list={list}
      name={name}
      value={value}
      inputWidth={inputWidth}
      borderRadius={borderRadius}
      error={errorMessage}
      onChange={onChange}
      padding='sm'
      label={label}
    />
    {errorMessage
      && <span><Text color='red' fontSize='xsmall' display='block'>
        {errorMessage}
      </Text></span>}
  </FlexContainer>
);

DropDownField.propTypes = {
  label: PropTypes.string,
  inputWidth: PropTypes.oneOf(Object.keys(width)),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  borderRadius: PropTypes.oneOf(Object.keys(themeBorderRadius)),
  onChange: PropTypes.func.isRequired,
  list: PropTypes.array,
};

DropDownField.defaultProps = {
  inputWidth: 'fullWidth',
  borderRadius: 'edgeRadius',
};

export default DropDownField;
