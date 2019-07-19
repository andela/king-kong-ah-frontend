import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import withCheckAuth from '<HOC>/withCheckAuth';
import Text from '<atoms>/Text/Text';
import { loginData, loginRules } from './loginItem';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import ImageUrl from '<image>/home.png';

const Login = (props) => {
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
              title="Sign In"
              dividerText="Or Sign In With"
              rules={loginRules}
              inputData={loginData}
              callback={props.handleSubmit}
            />
            <ToastContainer />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Fragment>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default withCheckAuth(Login, 'login');
