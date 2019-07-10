Text Input Field Default:

```jsx
<InputField
  type="text"
  name="text"
  fontSize="normal"
  inputWidth="fullWidth"
  backgroundColor="lightPink"
  onChange={e => setText(e.target.value)}
  padding="xs"
></InputField>
```

Search Bar Input Field Default:

```jsx
<InputField
  type="text"
  name="text"
  placeholder="search here"
  borderRadius="edgeRadius"
  inputWidth="searchBarWidth"
  backgroundColor="lightPink"
  padding="sm"
  onChange={e => setText(e.target.value)}
  onFocus={e => e.target.placeholder = ""}
></InputField>
```