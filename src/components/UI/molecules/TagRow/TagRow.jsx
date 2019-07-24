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
}) => {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection='row'
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
          margin='xs'
          to={`/${tag.name}`}
        >
          {tag.name}
        </StyledLink>
      );
    });
  }
};

TagRow.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagRow;
