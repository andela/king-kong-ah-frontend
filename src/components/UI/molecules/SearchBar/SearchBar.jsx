import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Icon from '<atoms>/Icon/Icon';
import InputField from '<atoms>/InputField/InputField';


/**
 * @description - SearchBar component
 *
 * @prop {bool} - getStarted
 *
 * @returns {JSX} - Input, Text, FlexContainer Component
 *
 */
const SearchBar = ({
  getStarted,
}) => {
  return (

    <FlexContainer
      padding='xs'
      flexDirection='row'
      borderRadius='xl'
      backgroundColor={(getStarted && 'transparent') || 'lightPink'}>
      <Icon height='none' width='search' margin='zero'
        marginTop='xsm' marginLeft='xs'/>
      <InputField
        type="text"
        transparentHover={true}
        name="text"
        placeholder="Search experiences"
        borderRadius="edgeRadius"
        inputWidth="fullWidth"
        backgroundColor="transparent"
      ></InputField>


    </FlexContainer>

  );
};

SearchBar.propTypes = {
  getStarted: PropTypes.oneOf([true, false]).isRequired,
};

SearchBar.defaultProps = {
  getStarted: true,
};

export default SearchBar;
