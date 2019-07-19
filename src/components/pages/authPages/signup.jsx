import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import withCheckAuth from '<HOC>/withCheckAuth';
import Text from '<atoms>/Text/Text';
import { SignUpData, SignUpRules } from './signUpItem';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import ImageUrl from '<image>/home.png';

const SignUp = (props) => {
  return (
    <Fragment>
      <FlexContainer>
        <Text
          content="true"
          textTransform="uppercase"
          padding="md"
          fontWeight="normal"
          display="inline"
          fontSize="normal"
          textAlign="center"
          color="primary"
        >
        Welcome to Authors Haven
        </Text>
        <FlexContainer flexDirection='row'>
          <FlexContainer>
            <Image
              imageUrl={ImageUrl}
              boxShadow='none'
              altText='welcome'
            />
          </FlexContainer>
          <FlexContainer>
            <AuthForm
              title="Sign Up"
              dividerText="Or Sign Up With"
              rules={SignUpRules}
              inputData={SignUpData}
              callback={props.handleSubmit}
            />
            <ToastContainer />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Fragment>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default withCheckAuth(SignUp, 'signup');
