/* eslint-disable react/display-name */
import React from 'react';
import { toast } from 'react-toastify';
import requestApi from '<helpers>/requestApi';
import 'react-toastify/dist/ReactToastify.css';

const withCheckAuth = (WrappedComponent, path) => (props) => {
  const handleSubmit = async (values) => {
    const { data, error } = await requestApi('post', `auth/${path}`, values);
    if (error) {
      toast.error('Error! User with the same data already exist');
      return error;
    }
    toast.success('Success Notification!');
    return data;
  };

  return (
    <WrappedComponent
      {...props}
      handleSubmit={handleSubmit}
    />
  );
};

export default withCheckAuth;
