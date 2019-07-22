import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';

const HeaderNavigation = ({ navItems }) => (
  <FlexContainer
    padding="zero"
    justifyContent="flex-end"
    containerWidth="searchBarWidth"
    alignItems="center"
    flexDirection="row"
  >
    <Fragment>{navItems.map(items => items)}</Fragment>
  </FlexContainer>
);
HeaderNavigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};
export default HeaderNavigation;
