Auth Form Component: 

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

<Form
  callback={callback}
  rules={rules}
  inputData={inputData}
/>
```