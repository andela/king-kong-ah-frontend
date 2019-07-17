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

    <FlexContainer containerWidth='searchWidth'
      padding='xs'
      flexDirection='row'
      borderRadius='xl'
      backgroundColor={(getStarted && 'transparent') || 'lightPink'}>
      <Icon height='none' width='search' margin='zero'
        marginTop='xsm' marginLeft='xs'/>
      <InputField
        type="text"
        hoverColor="transparent"
        name="text"
        placeholder="Search experiences"
        borderRadius="edgeRadius"
        inputWidth="searchBarWidth"
        backgroundColor="transparent"
        onChange={e => e.target.value}
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
