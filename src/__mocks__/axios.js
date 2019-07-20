const create = () => {
  return {
    get: (param) => {
      if (param === '/') {
        return Promise.resolve({
          data: 'fakedata',
        });
      }

      return Promise.reject(new Error('fakeerror'));
    },
  };
};

export default {
  create,
};
