IconRow Default: 

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
const icons = [
  {
    name: 'twitter',
    isExternal: true,
    to: 'https://twitter.com',
  },
  {
    name: 'facebook',
    isExternal: true,
    to: 'https://facebook.com',
  },
  {
    name: 'youtube',
    to: 'http://youtube.com',
  },
  {
    name: 'instagram',
    to: 'http://instagram.com',
  },
];

<Router>
  <IconRow icons={icons} />
</Router>
```
