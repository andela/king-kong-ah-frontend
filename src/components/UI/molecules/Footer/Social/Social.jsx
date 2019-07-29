import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import IconRow from '<molecules>/IconRow/IconRow';
import { iconNames } from '<variables>/icons';


const Social = ({ title, icons }) => (
  <FlexContainer
    backgroundColor="primary"
    padding="zero"
    justify-content="space-between"
  >
    <Fragment>
      <Title
        color='white001'
        textAlign='center'
        hasBottomBorder
        marginBottom='xxs'
        marginRight='smm'
        marginLeft='smm'
        paddingBottom='xsm'
      >
        {title}
      </Title>
      <IconRow icons={icons}/>
    </Fragment>
  </FlexContainer>
);

Social.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
      isExternal: PropTypes.bool.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};
export default Social;
