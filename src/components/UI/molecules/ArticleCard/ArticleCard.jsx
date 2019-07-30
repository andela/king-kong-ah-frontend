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
import StyledLink from '<atoms>/StyledLink/StyledLink';

const ArticleCard = ({
  imageUrl,
  title,
  description,
  rating,
  author,
  id,
}) => {
  return (
    <ArticleCard.Container>
      <StyledLink to={`/articlepage/${id}`}>
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
      </StyledLink>
    </ArticleCard.Container>
  );

  function renderDivider() {
    return (
      <Divider
        width="xxl"
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
        fontSize = 'sm'
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
        content='true'
      >
        {title}
      </Title>
    );
  }

  function renderAuthor() {
    return (
      <Title
        textAlign = 'center'
        fontSize = 'sm'
        color = 'darkGrey'
        paddingBottom ='xxxs'
        content='true'
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
  width: 35.4rem;
  transition: .5s all linear;

  &:hover {
    transform: scale(1.05);
  }
`;

ArticleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number,
  id: PropTypes.string,
};


export default ArticleCard;
