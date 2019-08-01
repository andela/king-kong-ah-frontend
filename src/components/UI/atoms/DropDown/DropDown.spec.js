import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, cleanup } from '<src>/helpers/testUtils';
import DropDown from './DropDown';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = (props) => {
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
  const utils = render(
    <DropDown
      {...props}
      list={list}
      name={name}
      onChange={onChange}
      label='category'
    />,
  );

  return { ...utils };
};

describe('DropDown Atom', () => {
  it('should render a drop down atom component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should fire a change event on drop down atom component', () => {
    const { getByText } = setup();

    fireEvent.change(getByText('defaults'), {
      target: {
        value: '4df25c1f-4224-4c7b-9807-2711dd337897',
      },
    });
  });

  it('should render drop down with list of options', () => {
    const { getByText } = setup();

    expect(getByText('defaults')).toBeTruthy();
  });

  it('should render a drop down atom component with selected option', () => {
    const { getByText } = setup({
      value: '4df25c1f-4224-4c7b-9807-2711dd337897',
    });
    expect(getByText('defaults')).toBeTruthy();
  });

  it('should render a drop down atom component with selected option', () => {
    const { getByText } = setup({
      list: [],
    });
    expect(getByText('category')).toBeTruthy();
  });
});
