import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @description - LetterPlaceHolder Component
 *
 * @prop {children} children - children
 *
 * @return {component} LetterPlaceHolder
 */
const LetterPlaceHolder = ({
  children,
}) => (
  <LetterPlaceHolder.Container>
    {children}
  </LetterPlaceHolder.Container>
);

LetterPlaceHolder.propTypes = {
  children: PropTypes.any,
};


LetterPlaceHolder.Container = styled.span`
  ${({ theme }) => `
  border-radius: ${theme.borderRadius.partialRadius};
  background: ${theme.buttonColors.light};
  width: ${theme.width.LetterPlaceHolder};
  height: ${theme.height.LetterPlaceHolder};
  font-size: ${theme.fontSizes.LetterPlaceHolder};
  color: ${theme.buttonColors.white001};
  padding: 1.4rem 1.7rem;
  margin-top: 0.6rem;
  margin-right: 0.8rem;
  text-align: center;
  display: inline-block;

  &:hover {
    background-color: ${theme.buttonColors.light};
  }

`}
`;
export default LetterPlaceHolder;
