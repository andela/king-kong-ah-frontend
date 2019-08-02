import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DropDown = ({
  list,
  name,
  label,
  onChange,
  value,
}) => {
  return (
    <DropDown.Container name={name} onChange={onChange}>
      <option value=''>{label}</option>
      {
        list.length
          ? list.map(item => <option
            value={item.id}
            key={item.id}
            defaultValue={item.id === value ? true : null}
          >
            {item.name}
          </option>)
          : null
      }
    </DropDown.Container>
  );
};

DropDown.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
};

DropDown.Container = styled.select`
  ${({
    padding,
    fontSize,
    color,
    theme,
  }) => `
    color: ${theme.textColors[color]};
    padding: ${theme.spacing[padding] || '0'};
    font-size: ${theme.fontSizes[fontSize]};
    width: 18rem;
    height: 4.0rem;
    display: block;
    font-size: 1.4rem;
    background: transparent;
    color: #B02091;
    border: 1px solid #B02091;
    box-sizing: border-box;

    @media ${theme.device.mobileS} {
      font-size: 1.2rem;
    }
    @media ${theme.device.mobileM} {
      font-size: 1.3rem;
    }
    @media ${theme.device.mobileL} {
      font-size: 1.3rem;
    }
    @media ${theme.device.tablet} {
      font-size: 1.3rem;
    }
`}
`;


export default DropDown;
