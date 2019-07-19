import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from '<templates>/PageLayout/PageLayout';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import withCheckAuth from '<HOC>/withCheckAuth';
import { SignUpData, SignUpRules } from './signUpItem';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import ImageUrl from '<image>/home.png';
import { signup } from './navItems';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';


const navItems = headerMapper(signup);

const SignUp = (props) => {
  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <FlexContainer>
        <FlexContainer flexDirection='row'>
          <FlexContainer
            justifyContent='center'
            alignItem='center'
            containerWidth='twoThird'>
            <Image
              imageUrl={ImageUrl}
              boxShadow='none'
              altText='welcome'
              justifyContent='center'
              alignItem='center'
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
    </PageLayout>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default withCheckAuth(SignUp, 'signup');
