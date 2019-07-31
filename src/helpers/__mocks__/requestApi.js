export default (method, path) => {
  if (path === 'auth/reject') {
    return Promise.reject(new Error('fakeerror400'));
  }

  if (path === 'auth/error409') {
    return Promise.resolve({
      error: 'fakedata409',
    });
  }

  if (path === 'auth/error400') {
    return Promise.resolve({
      error: 'fakedata400',
    });
  }

  return Promise.resolve({
    data: 'fakedata',
  });
};
