export const emailRules = {
  email: 'required|email',
};

export const emailData = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
  },
];

const passwordFormat = 'regex:/S*(S*([a-zA-Z]S*[0-9])|([0-9]S*[a-zA-Z]))S*/';
export const passwordRules = {
  password: ['required', 'min:8', passwordFormat],
};

export const passwordData = [
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];
