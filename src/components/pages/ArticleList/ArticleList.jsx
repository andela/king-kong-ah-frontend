import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import items from '../UserPage/navItems';
import TagRow from '<molecules>/TagRow/TagRow';
import tags from './categories';
import useApiData from '<hooks>/useApiData';
import PageLoader from '../../templates/PageLayout/PageLoader';
import Title from '<atoms>/Title/Title';
import ArticlesByCategory
  from '<organisms>/ArticlesByCategory/ArticlesByCategory';

const ArticleList = ({ location, history }) => {
  const navItems = headerMapper(items);

  const queryId = location.search || '07dea297-f951-4367-8da0-96462086d3e7';

  const [categoryId, setCategoryId] = useState(queryId);

  const { fetchedData, loading } = useApiData(
    'get',
    `/articles/${categoryId}/category`,
  );

  const onClick = (id) => {
    if (location.pathname !== '/articles') {
      return history.push(`/articles?category=${id}`);
    }
    setCategoryId(id);
  };
  if (loading) {
    return (
      <PageLayout.Container justifyContent="center" alignItems="center">
        <PageLoader />
      </PageLayout.Container>
    );
  }

  return (
    <PageLayout navItems={navItems}>
      <TagRow tags={tags} onClick={onClick}/>
      {!isEmpty(fetchedData)
        ? <ArticlesByCategory data={fetchedData.data}/>
        : <Title
          fontSize="normal"
          textAlign="center"
          color="primary"
          display="inline"
          paddingBottom="md"
          paddingTop='md'
        >
         There are no articles in this category yet
        </Title>}
    </PageLayout>
  );
};

ArticleList.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};
export default ArticleList;
