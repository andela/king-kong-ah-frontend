/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Text from '<atoms>/Text/Text';
import ArticleCard from '<molecules>/ArticleCard/ArticleCard';

const ArticleCardRow = ({
  title,
  articleCardItem,
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
          paddingTop='sm'
        >
          {title}
        </Text>
        <FlexContainer flexDirection='row'>
          {renderArticleCard()}
        </FlexContainer>
      </FlexContainer>
    </Fragment>
  );
  function renderArticleCard() {
    return articleCardItem.map((item, index) => {
      return (
        <ArticleCard
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          rating={item.rating}
          author={item.author}
        />
      );
    });
  }
};


export default ArticleCardRow;
