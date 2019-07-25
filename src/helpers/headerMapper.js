import React from 'react';
import Text from '<atoms>/Text/Text';
import InputField from '<atoms>/InputField/InputField';
import StyledLink from '<atoms>/StyledLink/StyledLink';
import Button from '<atoms>/Button/Button';

const headerMapper = links => Object.keys(links).map((component, index) => {
  switch (links[component].type) {
  case 'link':
    return (
      <StyledLink key={index} marginleft="sm" to={links[component].action}>
        <Text
          content="false"
          display="inline"
          fontSize="medium"
          color="primary"
          textTransform="capitalize"
        >
          {component}
        </Text>
      </StyledLink>
    );
  case 'input':
    return (
      <InputField
        key={index}
        type="text"
        name="search"
        placeholder="search experience"
        inputWidth="searchBarWidth"
        padding="xs"
        onChange={links[component].action}
        onFocus={(e) => {
          e.target.placeholder = '';
        }}
      />
    );
  case 'button':
    return (
      <StyledLink key={index} marginleft="sm" to={links[component].location}>
        <Button
          buttonType="getStarted"
          // onClick={links[component].action}
        >
          {component}
        </Button>
      </StyledLink>
    );
  default:
    return null;
  }
});

export default headerMapper;
