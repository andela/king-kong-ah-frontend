import React from 'react';
import PropTypes from 'prop-types';
import InputTextField from '<molecules>/InputTextField/InputTextField';


const InputData = (props) => {
  return props.InputDataItem.map((input, index) => (
    <InputTextField
      key={index}
      {...input}
    />
  ));
};

InputData.propTypes = {
  InputDataItem: PropTypes.array.isRequired,
};

export default InputData;
