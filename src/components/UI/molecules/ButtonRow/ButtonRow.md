ButtonRow Default: 

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
const images = [
  {
    name: 'twitter',
    url: 'https://cdn2.downdetector.com/static/uploads/c/300/5d4ec/twitter-logo_16.png',
  },
  {
    name: 'facebook',
    url: 'https://png.pngtree.com/element_our/sm/20180301/sm_5a9794da1b10e.png',
  },
  {
    name: 'google',
    url: 'http://pluspng.com/img-png/google-logo-png-open-2000.png',
  },
];
<Router>
<ButtonRow images={images} />
</Router>
```

ButtonRow with all props
```jsx
import { BrowserRouter as Router } from 'react-router-dom';
const images = [
  {
    name: 'twitter',
    url: 'https://cdn2.downdetector.com/static/uploads/c/300/5d4ec/twitter-logo_16.png',
  },
  {
    name: 'facebook',
    url: 'https://png.pngtree.com/element_our/sm/20180301/sm_5a9794da1b10e.png',
  },
  {
    name: 'google',
    url: 'http://pluspng.com/img-png/google-logo-png-open-2000.png',
  },
];
<Router>
<ButtonRow 
  images={images}
  width="58px"
  height="58px"
  boxShadow="icon"
  altText="social media button"
  margin="xs"
 />
</Router>
```