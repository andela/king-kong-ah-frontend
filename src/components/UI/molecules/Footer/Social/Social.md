Social Default:

```jsx
import { BrowserRouter as Router } from 'react-router-dom';

const props = {
  title: 'FOLLOW US',
  icons: [
    {
      name: 'twitter',
      isExternal: true,
      to: 'https://cdn2.downdetector.com/static/uploads/c/300/5d4ec/twitter-logo_16.png',
    },
    {
      name: 'facebook',
      isExternal: true,
      to: 'https://png.pngtree.com/element_our/sm/20180301/sm_5a9794da1b10e.png',
    },
    {
      name: 'youtube',
      isExternal: true,
      to: 'http://pluspng.com/img-png/google-logo-png-open-2000.png',
    },
    {
      name: 'instagram',
      isExternal: true,
      to: 'http://pluspng.com/img-png/google-logo-png-open-2000.png',
    },
  ],
};

<Router>
  <Social {...props}/>
</Router>
```
