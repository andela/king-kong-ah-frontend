/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import StyledLink from '<atoms>/StyledLink/StyledLink';
import Icon from '<atoms>/Icon/Icon';
import { iconNames } from '<variables>/icons';

/**
 * @description - IconRow Component
 *
 * @prop {array} icons - icons
 *
 * @return {component} IconRow
 */
const IconRow = ({
  icons,
}) => {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="space-between"
      flexDirection='row'
      padding='zero'
      backgroundColor="primary"
    >
      {icons.map((icon, index) => (
        <StyledLink
          key={index}
          isExternal={icon.isExternal}
          to={icon.to}
        >
          <Icon
            height="small"
            width="small"
            margin="zero"
            color='white001'
            iconName={icon.name}
            marginRight='sm'
            marginLeft="sm"
            id={`${icon.name}${index}`}
          />
        </StyledLink>
      ))}
    </FlexContainer>
  );
};

IconRow.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
      isExternal: PropTypes.bool.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

export default IconRow;
