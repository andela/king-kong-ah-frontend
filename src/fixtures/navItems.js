const links = {
  'sign up': {
    type: 'link',
    action: '/',
  },
  'sign in': {
    type: 'link',
    action: '/',
  },
  Search: {
    type: 'input',
    action: e => e.target.value,
  },
  'Get Started': {
    type: 'button',
    action: e => e.target,
    location: '/signin',
  },
  test: {
    type: 'test',
    action: 'test',
  },
};
export default links;
