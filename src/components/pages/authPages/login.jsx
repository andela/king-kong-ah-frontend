import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from '<templates>/PageLayout/PageLayout';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import withCheckAuth from '<HOC>/withCheckAuth';
import { loginData, loginRules } from './loginItem';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import ImageUrl from '<image>/home.png';
import { signin } from './navItems';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';

const navItems = headerMapper(signin);

const Login = (props) => {
  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <FlexContainer>
        <FlexContainer flexDirection='row'>
          <FlexContainer containerWidth='twoThird'>
            <Image
              imageUrl={ImageUrl}
              boxShadow='none'
              altText='welcome'
            />
          </FlexContainer>
          <FlexContainer paddingTop='xxl' >
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
    </PageLayout>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default withCheckAuth(Login, 'login');
