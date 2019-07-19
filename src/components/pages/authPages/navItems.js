export const signup = {
  'Sign In': {
    type: 'link',
    action: '/login',
  },
};

export const signin = {
  'Sign Up': {
    type: 'link',
    action: '/signup',
  },
};

const navItems = {
  ...signup,
  ...signin,
  'Get Started': {
    type: 'button',
    action: e => e.target,
    location: '/signup',
  },
};

export default navItems;
