import React from 'react';
import PropTypes from 'prop-types';

import TextArea from '<atoms>/TextArea/TextArea';
import Text from '<atoms>/Text/Text';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import themeBorderRadius from '<variables>/border';
import width from '<variables>/width';
import { textColors } from '<variables>/colorPalette';

/**
 * @description - TextAreaField component combined with an error field
 *
 * @prop {string} - placeholder
 * @prop {string | number} - value
 * @prop {string} - errorMessage
 * @prop {func} - onChange
 * @prop {string} - inputWidth
 *
 * @returns {JSX} - Input, Text, FlexContainer Component
 *
 * TextAreaField field Component
 */
const TextAreaField = ({
  value,
  placeholder,
  onChange,
  errorMessage,
  inputWidth,
  borderRadius,
  name,
}) => {
  return (
    <FlexContainer padding='xxxs'>
      <TextArea
        id='codex-editor'
        name={name}
        placeholder={placeholder}
        inputWidth={inputWidth}
        borderRadius={borderRadius}
        error={errorMessage}
        onChange={onChange}
        value={value}
      />
      {errorMessage
        && <span><Text color='red' fontSize='xsmall' display='block'>
          {errorMessage}
        </Text></span>}
    </FlexContainer>

  );
};

TextAreaField.propTypes = {
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

TextAreaField.defaultProps = {
  inputWidth: 'fullWidth',
  borderRadius: 'edgeRadius',
};

export default TextAreaField;
