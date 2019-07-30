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
  color,
  justifyContent,
  alignItems,
  backgroundColor,
  containerWidth,
  marginLeft,
}) => {
  return (
    <FlexContainer
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection='row'
      padding='zero'
      backgroundColor={backgroundColor}
      containerWidth={containerWidth}
      marginLeft={marginLeft}
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
            color={color}
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

IconRow.defaultProps = {
  color: 'white001',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'primary',
};

IconRow.propTypes = {
  color: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  backgroundColor: PropTypes.string,
  containerWidth: PropTypes.string,
  marginLeft: PropTypes.string,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
      isExternal: PropTypes.bool.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

export default IconRow;
