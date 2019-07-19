/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { toast } from 'react-toastify';
import requestApi from '<helpers>/requestApi';
import 'react-toastify/dist/ReactToastify.css';

const withCheckAuth = (WrappedComponent, path) => (props) => {
  const { history } = props;
  const handleSubmit = async (values) => {
    const { data, error } = await requestApi('post', `auth/${path}`, values);

    let errorMessage;
    const errorCode = error && error.substring(error.length - 3, error.length);
    if (errorCode === '409') {
      errorMessage = 'Error! User with the same data already exist';
    } else if ((errorCode === '404')
    || (errorCode === '400')) {
      errorMessage = 'Error! Invalid credentials';
    }

    if (errorMessage) {
      return toast.error(errorMessage) && error;
    }
    toast.success('Success Notification!') && data;
    setTimeout(history.push('/userpage'), 10000);
  };

  return (
    <WrappedComponent
      {...props}
      handleSubmit={handleSubmit}
    />
  );
};

export default withCheckAuth;
