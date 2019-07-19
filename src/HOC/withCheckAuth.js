/* eslint-disable react/display-name */
import React from 'react';
import { toast } from 'react-toastify';
// import requestApi from '<helpers>/requestApi';
import useApiData from '<hooks>/useApiData';
import 'react-toastify/dist/ReactToastify.css';

const withCheckAuth = (WrappedComponent, path) => (props) => {
  const handleSubmit = async (values) => {
    // const { data, error } = await requestApi('post', `auth/${path}`, values);
    const {
      fetchedData,
      loading,
      error,
    } = await useApiData('post', `auth/${path}`, values);
    if (loading) {
      toast.warn('Loading.....');
      return error;
    }
    if (error) {
      toast.error('Error! User with the same data already exist');
      return error;
    }
    toast.success('Success Notification!');
    return fetchedData;
  };

  return (
    <WrappedComponent
      {...props}
      handleSubmit={handleSubmit}
    />
  );
};

export default withCheckAuth;
