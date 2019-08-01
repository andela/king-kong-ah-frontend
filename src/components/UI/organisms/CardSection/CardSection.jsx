import React from 'react';
import PropTypes from 'prop-types';
import useApiData from '<hooks>/useApiData';
import PageLoader from '<templates>/PageLayout/PageLoader';
import ArticleCardRow from '<organisms>/ArticleCardRow/ArticleCardRow';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';


const ArticleCardList = ({ sectionTitle, categoryId }) => {
  const { fetchedData, loading } = useApiData(
    'get',
    `/articles/${categoryId}/category`,
  );


  if (loading) {
    return (
      <FlexContainer>
        <PageLoader />
      </FlexContainer>
    );
  }
  return (
    <FlexContainer>
      {fetchedData
      && <ArticleCardRow
        sectionTitle={sectionTitle}
        items={fetchedData.data}
      />
      }
    </FlexContainer>
  );
};

ArticleCardList.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};
export default ArticleCardList;
