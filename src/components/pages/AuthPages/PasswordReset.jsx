import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from '<templates>/PageLayout/PageLayout';
import AuthForm from '<organisms>/AuthForm/AuthForm';
import { passwordData, passwordRules } from './passwordItems';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import imageUrl from '<image>/home.png';
import { passwordReset } from './navItems';
import headerMapper from '<helpers>/headerMapper';
import formHandler from '<helpers>/formHandler';

const navItems = headerMapper(passwordReset);

const PasswordReset = (props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const token = props.location.search.split('?token=');
    if (token.length < 2 || token[1].trim() === '') {
      props.history.push('/password');
    } else {
      setQuery(props.location.search.trim());
    }
  }, []);

  const handleSubmit = async (values) => {
    values.confirmPassword = values.password;
    const data = {
      method: 'patch',
      path: `auth/reset-password${query}`,
      redirectTo: '/login',
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
              rules={passwordRules}
              inputData={passwordData}
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
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default PasswordReset;
