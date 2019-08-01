import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import CardDivider from '<molecules>/CardDivider/CardDivider';
import ButtonRow from '<molecules>/ButtonRow/ButtonRow';
import ButtonRowItem from './buttonRowItem';
import Title from '<atoms>/Title/Title';
import Form from '<molecules>/Form/Form';

const AuthForm = ({
  title,
  dividerText,
  callback,
  rules,
  inputData,
}) => {
  return (
    <Fragment>
      <FlexContainer
        borderColor='primary'
        borderRadius='xs'
        boxShadow='section'
        containerWidth='formWidth'
        padding='xs'
      >
        <Title
          fontSize="large"
          textAlign="center"
          color="primary"
          display="inline"
          paddingBottom="xs"
        >
          {title}
        </Title>
        <Form
          callback={callback}
          rules={rules}
          inputData={inputData}
        />
        {
          dividerText
          && <Fragment>
            <CardDivider
              text= {dividerText}
              fontSize='title'
              width='xxl'
              margin='zero'
              display='block'/>
            <Router>
              <ButtonRow
                images={ButtonRowItem}
                boxShadow="icon"
                altText="social media button"
                margin="zero"
              />
            </Router>
          </Fragment>
        }
      </FlexContainer>
    </Fragment>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  dividerText: PropTypes.string,
  callback: PropTypes.func,
  rules: PropTypes.object.isRequired,
  inputData: PropTypes.array.isRequired,
};

export default AuthForm;
