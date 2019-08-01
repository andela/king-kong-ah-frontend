import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useForm from '<hooks>/useForm';
import InputTextField from '<molecules>/InputTextField/InputTextField';
import DropDownField from '<molecules>/DropDownField/DropDownField';
import TextAreaField from '<molecules>/TextAreaField/TextAreaField';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import FormButtonRow from '<molecules>/FormButtonRow/FormButtonRow';

const Form = ({
  callback,
  rules,
  inputData,
  dropDown,
  renderEditor,
}) => {
  const { values, handleChange, handleSubmit } = useForm(callback, rules);
  inputData.forEach((input) => {
    input.onChange = handleChange;
    const { value, err } = values[input.name];
    input.value = value;
    input.errorMessage = err;
  });

  useEffect( () => {
    renderEditor();
  }, []);

  const buttons = [{ name: 'Save draft' }, { name: 'Publish' }];

  const textArea = inputData.filter(input => input.type === 'textarea').shift();
  const titleInput = inputData.filter(input => input.name === 'title').shift();

  return (
    <FlexContainer containerWidth='twoThird'>
      <form>
        <FlexContainer
          flexDirection='row'
          containerWidth='fullWidth'
          justifyContent='space-between'
          padding='xs'
        >
          <FlexContainer>
            {
              inputData.filter(input => input.type === 'dropdown')
                .map((filteredInput, key) => <DropDownField
                  {...filteredInput}
                  list={dropDown}
                  key={key}
                  onChange={handleChange}
                />)
            }
          </FlexContainer>
          <FlexContainer flexDirection='row' alignItem='end'>
            <FormButtonRow buttons={buttons} onSubmit={handleSubmit}/>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer>
          <InputTextField
            {...titleInput}
            backgroundColor='grey'
            fontSize='medium'
            inputColor='darkGrey'
          />
          <TextAreaField
            {...textArea}
            list={dropDown}
          />
        </FlexContainer>
      </form>
    </FlexContainer>
  );
};

Form.propTypes = {
  callback: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
  inputData: PropTypes.array.isRequired,
  dropDown: PropTypes.array.isRequired,
  renderEditor: PropTypes.func,
};
export default Form;
