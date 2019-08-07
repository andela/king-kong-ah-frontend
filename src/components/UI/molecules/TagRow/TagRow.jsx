/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import StyledLink from '<atoms>/StyledLink/StyledLink';

/**
 * @description - TagRow Component
 *
 * @prop {string} tags - tags
 * @prop {object} handleClick - handle click function
 *
 * @return {component} TagRow
 */
const TagRow = ({
  tags,
  onClick,
}) => {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection='row'
      containerWidth="minWidth"
      marginLeft="smd"
      textAlign="center"
      margin="smmm"
    >
      {renderTags()}

    </FlexContainer>
  );

  function renderTags() {
    return tags.map((tag, index) => {
      return (
        <StyledLink
          key={index}
          id={tag.id}
          tag='true'
          onClick={() => onClick(tag.id)}
          margin='xs'
          textAlign="center"
        >
          {tag.name}
        </StyledLink>
      );
    });
  }
};

TagRow.propTypes = {
  tags: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default TagRow;
