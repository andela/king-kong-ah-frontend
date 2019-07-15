InputFormField Default:
```jsx
<InputTextField
  label='First Name'
  name='firstname'
  type='text'
  placeholder='Enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
  value='asd1'
/>
```

example
```jsx
<InputTextField
  label='First Name'
  name='firstname'
  type='text'
  placeholder='enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
  value='asd2'
/>
```
Form field with password 
```jsx
<InputTextField
  label='Password '
  name='password'
  type='password'
  placeholder='enter password'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
  value='asd3'
/>
```

Form field with error message
```jsx
<InputTextField
  label='First Name'
  name='firstname'
  type='password'
  placeholder='enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='fullWidth'
  errorMessage='first name is required'
  value='asd4'
/>
```

Form field with half width
```jsx
<InputTextField
  label='First Name'
  name='firstname'
  type='text'
  placeholder='enter first name'
  onChange={e => setText(e.target.value)}
  inputWidth='searchBarWidth'
  errorMessage='first name is required'
  value='asd5'
/>
```