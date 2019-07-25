import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import Text from '<atoms>/Text/Text';

const About = ({ title, textContent }) => (
  <FlexContainer
    backgroundColor="primary"
    padding="zero"
  >
    <Fragment>
      <Title
        color='white001'
        fontSize='large'
        paddingBottom='xsm'
      >
        {title}
      </Title>
      {textContent.map((text, index) => (
        <Text
          key={index}
          color='white001'
          hasLineHeight
        >
          {text}
        </Text>
      ))}

    </Fragment>
  </FlexContainer>
);


About.propTypes = {
  title: PropTypes.string.isRequired,
  textContent: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default About;
