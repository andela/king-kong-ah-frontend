import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import spacing from '<variables>/spacing';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import Text from '<atoms>/Text/Text';
import LetterPlaceHolder from '<atoms>/LetterPlaceHolder/LetterPlaceHolder';


const getFirstLetter = text => text.charAt(0).toUpperCase();

/**
 * @description - DropDownHeader
 *
 * @return {component} DropDownHeader
 */
const DropDownHeader = ({ title, subTitle }) => {
  const placeholderText = getFirstLetter('emmanuel');
  return (
    <DropDownHeader.Container>
      <FlexContainer padding='xxxs' flexDirection="row">
        <LetterPlaceHolder> {placeholderText} </LetterPlaceHolder>
        <FlexContainer containerWidth="dropDownHeader"
          paddingTop='xs' padding="xxxs">
          <Title fontSize='title' color='primary'>{title}</Title>
          <Text padding='xxxs'
            fontSize='sm' color='lighterGrey'>{subTitle}</Text>
        </FlexContainer>
      </FlexContainer>
    </DropDownHeader.Container>


  );
};

DropDownHeader.propTypes = {
  padding: PropTypes.oneOf(Object.keys(spacing)),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

DropDownHeader.Container = styled.span`
  ${({
    theme,
  }) => `
border-bottom: 2px solid ${theme.textColors.lighterGrey};
width: ${theme.width.fullWidth};
`}
`;

export default DropDownHeader;
