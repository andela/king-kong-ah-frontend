import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from '<templates>/PageLayout/PageLayout';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import { emailData, emailRules } from './passwordItems';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import imageUrl from '<image>/home.png';
import { passwordReset } from './navItems';
import headerMapper from '<helpers>/headerMapper';
import formHandler from '<helpers>/formHandler';


const navItems = headerMapper(passwordReset);

const PasswordReset = (props) => {
  const handleSubmit = (values) => {
    const data = {
      method: 'post',
      path: 'recoverEmail',
      redirectTo: '/',
    };

    formHandler(values, props.history, data);
  };

  return (
    <PageLayout navItems={navItems}>
      <FlexContainer>
        <FlexContainer flexDirection='row' height='80%'>
          <FlexContainer>
            <Image
              imageUrl={imageUrl}
              boxShadow='none'
              altText='welcome'
            />
          </FlexContainer>
          <FlexContainer padding='zero'>
            <AuthForm
              title="Password Reset"
              rules={emailRules}
              inputData={emailData}
              callback={handleSubmit}
            />
            <ToastContainer />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PageLayout>
  );
};

PasswordReset.propTypes = {
  history: PropTypes.object.isRequired,
};

export default PasswordReset;
