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
    throw err.response.data;
  }
};

export default requestApi;
