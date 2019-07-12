import React from 'react';
import PropTypes from 'prop-types';
import HeaderNavigation from '<molecules>/Headers/HeaderNavigation';
import Title from '<atoms>/Title/Title';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';

const Header = ({ navItems }) => {
  return (
    <FlexContainer
      padding="md"
      justifyContent="space-between"
      flexDirection="row"
      alignItems="flex-end"
    >
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
      <HeaderNavigation navItems={navItems} />
    </FlexContainer>
  );
};

Header.propTypes = {
  navItems: PropTypes.array.isRequired,
};

export default Header;
