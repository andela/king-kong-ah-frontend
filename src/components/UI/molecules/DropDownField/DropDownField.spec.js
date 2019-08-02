import React from 'react';
import { render, cleanup } from '<src>/helpers/testUtils';
import DropDownField from './DropDownField';
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
    <DropDownField
      list={list}
      name={name}
      onChange={onChange}
      {...props}
    />,
  );

  return { ...utils };
};

describe('DropDownField Molecule', () => {
  it('should render a dropdown field field molecule component', () => {
    const { container } = setup();

    expect(container).toBeTruthy();
  });

  it('should render dropdown field with list', () => {
    const { getByText } = setup();

    expect(getByText('defaults')).toBeTruthy();
  });

  it('should apply default style', () => {
    const { getByText } = setup();

    expect(getByText('defaults')).toHaveStyle(`
      padding: 0px 2px 1px 2px;
    `);
  });

  it('should render with error message', () => {
    const { getByText } = setup({ errorMessage: 'Test error message' });

    expect(getByText('Test error message'));
  });
});
