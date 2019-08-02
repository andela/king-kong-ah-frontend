/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import ArticleCard from '<molecules>/ArticleCard/ArticleCard';

const ArticlesByCategory = ({
  data,
}) => {
  return (
    <Fragment>
      <FlexContainer
        flexDirection='row'
        paddingTop='zero'
        overflowY='scroll'
        padding='xxxl'>
        {renderArticlesByCategory()}
      </FlexContainer>
    </Fragment>
  );
  function renderArticlesByCategory() {
    return data.map((item, index) => {
      return (
        <ArticleCard
          key={index}
          imageUrl={item.articleImage}
          title={item.title}
          description={item.description}
          rating={item.rating}
          author={
            item.user.firstName
              .concat(' ', item.user.lastName)
          }
          width='xxl'
        />
      );
    });
  }
};

ArticlesByCategory.propTypes = {
  data: PropTypes.array,
};

export default ArticlesByCategory;
