/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { toast } from 'react-toastify';
import requestApi from '<helpers>/requestApi';
import 'react-toastify/dist/ReactToastify.css';

const withCheckAuth = (WrappedComponent, path) => (props) => {
  const handleSubmit = async (values) => {
    const { history } = props;
    let apiData;
    let apiError;
    try {
      const response = await requestApi('post', `auth/${path}`, values);
      apiData = response.data;
      apiError = response.error;
    } catch (error) {
      return error;
    }

    const errorCode = apiError
    && apiError.substring(apiError.length - 3, apiError.length);

    let errorMessage;
    if (errorCode === '409') {
      errorMessage = 'Error! User with the same data already exist';
    } else if ((errorCode === '404')
      || (errorCode === '400')) {
      errorMessage = 'Error! Invalid credentials';
    }

    if (errorMessage) {
      return toast.error(errorMessage) && apiError;
    }
    toast.success('Success Notification!') && apiData;
    setTimeout(history.push('/dashboard'), 10000);
  };

  return (
    <WrappedComponent
      {...props}
      handleSubmit={handleSubmit}
    />
  );
};

export default withCheckAuth;
