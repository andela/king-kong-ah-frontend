DropDown Default:

```jsx
const name = 'dropdown';

const onChange = () => true;

const list = [
  {
    id: '07dea297-f951-4367-8da0-96462086d3e7',
    updatedAt: '2019-07-30 10:58:48.324+00',
    name: 'adventure',
    createdAt: '2019-07-30 10:58:48.324+00',
  },
  {
    id: '4df25c1f-4224-4c7b-9807-2711dd337897',
    updatedAt: '2019-07-30 10:58:48.323+00',
    name: 'defaults',
    createdAt: '2019-07-30 10:58:48.323+00',
  },
];

<DropDown list={list} name={name} onChange={onChange} label='category'/>

```
