const passwordFormat = 'regex:/S*(S*([a-zA-Z]S*[0-9])|([0-9]S*[a-zA-Z]))S*/';
export const loginRules = {
  email: 'required|email',
  password: ['required', 'min:8', passwordFormat],
};

export const loginData = [
  {
    label: 'Email',
    type: 'text',
    name: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];
