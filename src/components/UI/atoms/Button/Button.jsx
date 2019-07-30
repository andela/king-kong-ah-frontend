/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSizes } from '<variables>/fonts';

/**
 * @description - Button Component
 *
 * @prop {string} display - display
 * @prop {string} buttonType - buttonType
 * @prop {function} onClick - onClick
 * @prop {children} children - children
 *
 * @return {component} Button
 */
const Button = ({
  buttonType,
  onClick,
  children,
  display,
}) => (
  <Button.Container
    buttonType={buttonType}
    display={display}
    onClick={onClick}
  >
    {children}
  </Button.Container>
);

Button.propTypes = {
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  buttonType: PropTypes.oneOf(['default', 'getStarted', 'submit', 'dropDown', 'follow']),
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  display: 'block',
  buttonType: 'default',
};

const buttonRadius = {
  default: 'none',
  getStarted: 'none',
  submit: '0.8rem',
  dropDown: '100%',
  follow: 'none',
};

const buttonBorderColor = {
  default: '#666666',
  getStarted: '#B02091',
  submit: '#666666',
  dropDown: '#B02091',
  follow: '#B02091',
};

const buttonBackground = {
  default: '#B02091',
  getStarted: 'transparent',
  submit: '#690375',
  dropDown: '#B02091',
  follow: 'transparent',
};

const buttonWidth = {
  default: '12rem',
  getStarted: '18rem',
  submit: '43.09rem',
  dropDown: '4.76rem',
  follow: '10rem',
};

const buttonTopMargin = {
  default: 'inherit',
  getStarted: 'inherit',
  submit: '2rem',
  follow: 'inherit',
};

const buttonFontSize = {
  default: 'normal',
  getStarted: 'medium',
  submit: 'title',
  dropDown: 'medium',
  follow: 'title',
};

const buttonFade = {
  default: '12rem',
  getStarted: 'none',
  submit: '43.09rem',
  follow: 'none',
};

const buttonHeight = {
  default: '5.0rem',
  getStarted: '5.0rem',
  submit: '5.54rem',
  dropDown: '4.76rem',
  follow: '5.0rem',
};

Button.Container = styled.button`
  ${({
    buttonType, display, theme,
  }) => `
  margin-top: ${buttonTopMargin[buttonType]};
  width: ${buttonWidth[buttonType]};
  height: ${buttonHeight[buttonType]};
  display: ${display};
  font-size: ${fontSizes[buttonFontSize[buttonType]]};
  background: ${buttonBackground[buttonType]};
  color: ${theme.buttonColors[buttonType]};
  border-radius: ${buttonRadius[buttonType]};
  border: 1px solid ${buttonBorderColor[buttonType]};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${theme.buttonHover[buttonType]};
    color: ${theme.buttonColors.white001};
    border: 1px solid ${theme.buttonColors.light};
  }

  &:active {
    border: 1px solid ${theme.buttonColors.grey};
    box-shadow: inset 1px 0px 5px ${theme.buttonColors.grey};
  }

  &:focus {
    outline: 0;
  }

  @media ${theme.device.mobileS} {
    display: ${buttonFade[buttonType]};
  }
  @media ${theme.device.mobileM} {
    display: ${buttonFade[buttonType]};
  }
  @media ${theme.device.mobileL} {
    display: ${buttonFade[buttonType]};
  }
  @media ${theme.device.tablet} {
    display: ${buttonFade[buttonType]};
    ${buttonType === 'dropDown' && 'font-size: 1.2rem;'}
    ${buttonType === 'dropDown' && 'width: 3.4rem;'}
    ${buttonType === 'dropDown' && 'height: 3.4rem;'}
  }
`}
`;

export default Button;
