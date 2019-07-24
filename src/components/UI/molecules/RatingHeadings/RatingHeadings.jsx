import React from 'react';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Text from '<atoms>/Text/Text';

const RatingHeadings = () => (
  <FlexContainer justifyContent='center' alignItems='center' padding='zero'>
    <Text
      fontSize='small'
      textTransform='uppercase'
      textAlign='center'
      content='true'
      letterSpacing='xxxs'
      fontWeight='bold'
      color='red'
    >
      Authors-haven
    </Text>
    <Text
      fontSize='xlarge'
      textAlign='center'
      content='true'
      fontWeight='bold'
      color='grey'
      paddingTop='sm'
    >
      Ratings of your favorite articles
    </Text>

  </FlexContainer>

);

export default RatingHeadings;
