import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Button from '<atoms>/Button/Button';

const FormButtonRow = ({ buttons, onSubmit }) => {
  return (
    <FlexContainer
      flexDirection='row'
      padding='zero'
    >
      {
        buttons.length
          ? buttons.map((button, key) => <FlexContainer key={key} padding='xs'>
            <Button
              onClick={onSubmit}
            >
              {button.name}
            </Button>
          </FlexContainer>)
          : null
      }
    </FlexContainer>
  );
};

FormButtonRow.propTypes = {
  buttons: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

export default FormButtonRow;
