const passwordFormat = 'regex:/S*(S*([a-zA-Z]S*[0-9])|([0-9]S*[a-zA-Z]))S*/';
export const SignUpRules = {
  email: 'required|email',
  username: 'required|string|alpha|min:6',
  firstName: 'required|string|alpha|min:2',
  lastName: 'required|string|alpha|min:2',
  password: ['required', 'min:8', passwordFormat],
};

export const SignUpData = [
  {
    label: 'First Name',
    type: 'text',
    name: 'firstName',
  },
  {
    label: 'Last Name',
    type: 'text',
    name: 'lastName',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];
