InputFormField Default:
```jsx
<InputFormField
  label='First Name'
  name='firstname'
  type='text'
  placeholder='Enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
/>
```

example
```jsx
<InputFormField
  label='First Name'
  name='firstname'
  type='text'
  placeholder='enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
/>
```
Form field with password 
```jsx
<InputFormField
  label='Password '
  name='password'
  type='password'
  placeholder='enter password'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
/>
```

Form field with error message
```jsx
<InputFormField
  label='First Name'
  name='firstname'
  type='password'
  placeholder='enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
  errorMessage='first name is required'
/>
```

Form field with half width
```jsx
<InputFormField
  label='First Name'
  name='firstname'
  type='text'
  placeholder='enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='searchBarWidth'
  errorMessage='first name is required'
/>
```