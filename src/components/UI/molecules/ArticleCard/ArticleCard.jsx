/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import Text from '<atoms>/Text/Text';
import Title from '<atoms>/Title/Title';
import Divider from '<atoms>/Divider/Divider';
import StarRating from '<molecules>/StarRating/StarRating';

const ArticleCard = ({
  imageUrl,
  title,
  description,
  rating,
  author,
}) => {
  return (
    <ArticleCard.Container>
      <FlexContainer
        boxShadow="articleCard"
        alignItems='center'
        justifyContent = 'center'
        margin="md"
      >
        {renderImage()}
        {title && (renderTitle())}
        {description && (renderText())}
        {renderDivider()}
        {author && (renderAuthor())}
        {renderRating()}
      </FlexContainer>
    </ArticleCard.Container>
  );

  function renderDivider() {
    return (
      <Divider
        width="mds"
      />
    );
  }

  function renderImage() {
    return (
      <Image
        imageUrl={imageUrl}
        width='240px'
        height='174px'
      />
    );
  }

  function renderText() {
    return (
      <Text
        textAlign = 'center'
        fontSize = 'smaller'
        color = 'darkGrey'
        content = 'true'
        lineHeight = 'medium'
      >
        {description}
      </Text>
    );
  }

  function renderTitle() {
    return (
      <Title
        textAlign = 'center'
        fontSize = 'normal'
        color = 'darkGrey'
        paddingBottom ='xs'
        paddingTop = 'sm'
      >
        {title}
      </Title>
    );
  }

  function renderAuthor() {
    return (
      <Title
        textAlign = 'center'
        fontSize = 'small'
        color = 'darkGrey'
        paddingBottom ='xxxs'
      >
        {author}
      </Title>
    );
  }

  function renderRating() {
    return (
      <StarRating
        rating={rating}
      />
    );
  }
};


ArticleCard.Container = styled.div`
  text-align: center;
  width: 31.4rem;
`;

ArticleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default ArticleCard;
