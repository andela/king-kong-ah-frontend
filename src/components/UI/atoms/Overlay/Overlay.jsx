import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @description - Overlay Component
 *
 * @prop {function} onClick - onClick
 *
 * @return {component} Overlay
 */
const Overlay = ({
  onClick,
}) => (
  <Overlay.Container
    onClick={onClick}
  />
);

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};


Overlay.Container = styled.div`
  ${() => `
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: -1;
  border: none;
`}
`;

export default Overlay;
