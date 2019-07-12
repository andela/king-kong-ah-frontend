const navItems = {
  'Sign Up': {
    type: 'link',
    action: '/',
  },
  'Sign In': {
    type: 'link',
    action: '/',
  },
  'Get Started': {
    type: 'button',
    action: e => e.target,
    location: '/signin',
  },
};

export default navItems;
