AuthForm: 

```jsx
const rules = {
  email: 'required|email',
  password: 'required|string',
};

const inputData = [{
  label: 'Email',
  type: 'text',
  placeholder: 'Enter email',
  name: 'email',
}, {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter password',
  name: 'password',
},
];

const callback = () => true; // on submit function
    <AuthForm
      title="Sign In"
      dividerText="Or Sign In With"
      callback={callback}
      rules={rules}
      inputData={inputData}
    />
```