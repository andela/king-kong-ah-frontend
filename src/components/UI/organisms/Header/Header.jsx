import React from 'react';
import PropTypes from 'prop-types';
import HeaderNavigation from '<molecules>/Headers/HeaderNavigation';
import Title from '<atoms>/Title/Title';
import StyledLink from '<atoms>/StyledLink/StyledLink';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';

const Header = ({ navItems }) => (
  <FlexContainer
    padding="md"
    justifyContent="space-between"
    flexDirection="row"
    alignItems="center"
  >
    <StyledLink to='/'>
      <Title
        fontWeight="heavy"
        display="inline"
        fontSize="large"
        textAlign="center"
        color="primary"
        content="true"
      >
      Authors-Haven
      </Title>
    </StyledLink>
    <HeaderNavigation navItems={navItems} />
  </FlexContainer>
);

Header.propTypes = {
  navItems: PropTypes.array.isRequired,
};

export default Header;
