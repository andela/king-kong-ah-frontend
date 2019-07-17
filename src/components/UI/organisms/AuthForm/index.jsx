import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import CardDivider from '<molecules>/CardDivider/CardDivider';
import ButtonRow from '<molecules>/ButtonRow/ButtonRow';
import ButtonRowItem from './buttonRowItem';
import Title from '<atoms>/Title/Title';
import InputData from './InputData';

const AuthForm = (props) => {
  const { title, dividerText, InputDataItem } = props;
  return (
    <Fragment>
      <FlexContainer borderColor='primary' borderRadius='xs'>
        <Title
          fontSize="large"
          textAlign="center"
          color="primary"
          display="inline"
          paddingBottom="md"
        >
          {title}
        </Title>
        <form>
          <InputData InputDataItem={InputDataItem} />
          {'button props'}
        </form>
        <CardDivider
          text= {dividerText}
          fontSize='title'
          width='xxl'
          margin='xs'
          display='block'/>
        <Router>
          <ButtonRow
            images={ButtonRowItem}
            width="58px"
            height="58px"
            boxShadow="icon"
            altText="social media button"
            margin="xs"
          />
        </Router>
      </FlexContainer>
    </Fragment>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  dividerText: PropTypes.string.isRequired,
  InputDataItem: PropTypes.array.isRequired,
};

export default AuthForm;
