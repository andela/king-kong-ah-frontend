/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Text from '<atoms>/Text/Text';
import ArticleCard from '<molecules>/ArticleCard/ArticleCard';

const ArticleCardRow = ({
  sectionTitle,
  items,
}) => {
  return (
    <Fragment>
      <FlexContainer>
        <Text
          fontSize='xlarge'
          textAlign='left'
          content='true'
          fontWeight='bold'
          color='grey'
          padding='smm'
        >
          {sectionTitle}
        </Text>
        <FlexContainer flexDirection='row' paddingTop='zero' overflowX='scroll'>
          {renderArticleCard()}
        </FlexContainer>
      </FlexContainer>
    </Fragment>
  );
  function renderArticleCard() {
    return items.map((item, index) => {
      const {
        id, articleImage, title, description, rating, user,
      } = item;
      const { firstName, lastName } = user;
      const author = firstName
        ? (firstName.concat(' ', lastName)) : firstName;
      return (
        <ArticleCard
          key={index}
          imageUrl={articleImage}
          title={title}
          description={description}
          rating={rating}
          author={author}
          id={id}
        />
      );
    });
  }
};

ArticleCardRow.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  items: PropTypes.array,
};

export default ArticleCardRow;
