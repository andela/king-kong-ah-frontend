const navItems = {
  'Sign Up': {
    type: 'link',
    action: '/signup',
  },
  'Sign In': {
    type: 'link',
    action: '/login',
  },
  'Get Started': {
    type: 'button',
    action: e => e.target,
    location: '/signup',
  },
};

export default navItems;
