TagRow Default: 

```jsx
import { BrowserRouter as Router } from 'react-router-dom';
const tags = [
  {
    name: 'Adventure',
    id: '1',
  },
  {
    name: 'Love',
    id: '2',
  },
  {
    name: 'Finance',
    url: '3',
  },
  {
    name: 'Design',
    id: '4',
  },
  {
    name: 'Diary',
    url: '5',
  },
];
const handleClick = (e) => console.log(e.target.text);
<Router>
  <TagRow tags={tags} handleClick={handleClick}/>
</Router>
```
