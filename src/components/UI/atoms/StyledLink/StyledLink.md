StyledLink Default:

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
<Router>
  <StyledLink>Google Link</StyledLink>
</Router>
```

StyledLink With All Props:

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
<Router>
  <StyledLink
    to="http://google.com"
    isExternal
    tag="true"
    fontSize="normal"
    margin="xs"
    onClick={(e) => console.log('clicked')}
  >
    Google Link
  </StyledLink>
</Router>
```
