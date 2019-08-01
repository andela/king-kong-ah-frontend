import { toast } from 'react-toastify';
import requestApi from '<helpers>/requestApi';

const handleSubmit = async (
  values, history, { method, path, redirectTo },
) => {
  let apiData;
  let apiError;

  try {
    const response = await requestApi(method, `auth/${path}`, values);
    apiData = response.data;
    apiError = response.error;
  } catch (error) {
    return error && false;
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
    return toast.error(errorMessage) && false;
  }

  toast.success(apiData.message);
  redirectTo && setTimeout(() => history.push(redirectTo), 6000);
  return apiData;
};

export default handleSubmit;
