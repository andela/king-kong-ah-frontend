import React, { Fragment } from 'react';
import Text from '../UI/atoms/Text/Text';

const Homepage = () => {
  return (
    <Fragment>
      <Text
        content="true"
        textTransform="uppercase"
        padding="md"
        fontWeight="normal"
        display="inline"
        fontSize="normal"
        textAlign="center"
        color="primary"
      >
        Welcome to Authors Haven
      </Text>
    </Fragment>
  );
};

export default Homepage;
