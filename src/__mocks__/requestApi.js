export default (method, path) => {
  if (path === 'auth/error409') {
    return Promise.reject(new Error('fakeerror409'));
  }
  if (path === 'auth/error400') {
    return Promise.reject(new Error('fakeerror400'));
  }

  return Promise.resolve({
    data: 'fakedata',
  });
};
