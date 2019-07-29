import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import StyledLink from '<atoms>/StyledLink/StyledLink';
import Text from '<atoms>/Text/Text';

const Menu = ({ title, links }) => (
  <FlexContainer
    backgroundColor="primary"
    padding="zero"
    display='block'
  >
    <Fragment>
      <Title
        color='white001'
        hasBottomBorder
        marginBottom='xxs'
        paddingBottom='xs'
      >
        {title}
      </Title>
      {links.map((link, index) => {
        return (
          <StyledLink
            key={index}
            color='white001'
            textalign='left'
            display='block'
          >
            <Text hasLineHeight marginBottom='xxs'>{link}</Text>
          </StyledLink>);
      })}
    </Fragment>
  </FlexContainer>
);

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Menu;
