Footer Default:

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
const props = {
  about: {
    title: 'Authors-Haven',
    texts: [
      'Welcome to Authors Haven.',
      'A social platform for the creative heart.',
    ],
  },
  menu: {
    title: 'MENU',
    links: ['ARTICLES', 'GET STARTED'],
  },
  social: {
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
  },
};

<Router>
  <Footer {...props}/>
</Router>
```