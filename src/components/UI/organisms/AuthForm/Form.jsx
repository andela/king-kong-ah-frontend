import React from 'react';
import PropTypes from 'prop-types';

import useForm from '<hooks>/useForm';
import InputTextField from '<molecules>/InputTextField/InputTextField';
import Button from '<atoms>/Button/Button';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';

const Form = ({
  callback,
  rules,
  inputData,
}) => {
  const { values, handleChange, handleSubmit } = useForm(callback, rules);
  inputData.forEach((input) => {
    input.onChange = handleChange;
    input.value = values[input.name.value];
  });
  return (
    <form>
      <FlexContainer display='flex' justifyContent='center' alignItems='center'>
        {
          inputData.map((input, key) => (
            <InputTextField {...input} key={key} inputWidth='formInputWidth'/>
          ))
        }
        <FlexContainer padding='xs'>
          <Button
            buttonType='submit'
            onClick={handleSubmit}
          >
            {'Submit'}
          </Button>
        </FlexContainer>
      </FlexContainer>
    </form>
  );
};

Form.propTypes = {
  callback: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
  inputData: PropTypes.array.isRequired,
};
export default Form;
