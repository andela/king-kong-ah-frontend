const items = {
  'Forgotten Password': {
    type: 'link',
    action: '/password',
  },
  'Sign In': {
    type: 'link',
    action: '/login',
  },
  'Sign Up': {
    type: 'link',
    action: '/signup',
  },
};

export const passwordReset = {
  'Sign In': items['Sign In'],
  'Sign Up': items['Sign Up'],
};
export const signup = {
  'Forgotten Password': items['Forgotten Password'],
  'Sign In': items['Sign In'],
};

export const signin = {
  'Forgotten Password': items['Forgotten Password'],
  'Sign Up': items['Sign Up'],
};


const navItems = {
  'Sign Up': items['Sign Up'],
  'Sign In': items['Sign In'],
  'Get Started': {
    type: 'button',
    location: '/signup',
  },
};

export default navItems;
