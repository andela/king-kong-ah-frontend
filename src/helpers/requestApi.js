import api from '<api>/api';

const requestApi = async (method, path, data) => {
  const params = [path];
  data && params.push(data);

  try {
    const response = await api[method](...params);
    return {
      data: response.data,
    };
  } catch (err) {
    return {
      error: err.message,
    };
  }
};

export default requestApi;
