import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Text from '<atoms>/Text/Text';
import About from '<molecules>/Footer/About/About';
import Menu from '<molecules>/Footer/Menu/Menu';
import Social from '<molecules>/Footer/Social/Social';
import { iconNames } from '<variables>/icons';

const Footer = ({ about, menu, social }) => (
  <Fragment>
    <FlexContainer
      backgroundColor='primary'
      padding='xxl'
      paddingTop='xxl'
      justifyContent='space-between'
      flexDirection='row'
      alignItems='flex-start'
    >
      <Fragment>
        <About {...about}/>
        <Menu {...menu}/>
        <Social {...social}/>
      </Fragment>
    </FlexContainer>
    <FlexContainer
      backgroundColor='primary'
    >
      <Text
        textAlign='center'
        color='white001'
        font-weight='bold'
        letterSpacing='xs'
      >@2019 AUTHORS-HAVEN</Text>
    </FlexContainer>
  </Fragment>
);

Footer.propTypes = {
  about: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      textContent: PropTypes.arrayOf(PropTypes.string.isRequired),
    },
  ),
  menu: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(PropTypes.string.isRequired),
    },
  ),
  social: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      icons: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
          isExternal: PropTypes.bool.isRequired,
          to: PropTypes.string.isRequired,
        }),
      ),
    },
  ),
};

export default Footer;
