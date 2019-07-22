const create = () => {
  return {
    get: (param) => {
      if (param === 'error') {
        return Promise.reject(new Error('fakeerror'));
      }

      return Promise.resolve({
        data: 'fakedata',
      });
    },
  };
};

export default {
  create,
};
