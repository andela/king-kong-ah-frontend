/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Divider from '<atoms>/Divider/Divider';
import ArticleHeading from '<molecules>/ArticleHeading/ArticleHeading';
import ArticleBody from '<molecules>/ArticleBody/ArticleBody';
import ArticleProfile from '<molecules>/ArticleProfile/ArticleProfile';
import CardSection from '<organisms>/CardSection/CardSection';
import TagRow from '<molecules>/TagRow/TagRow';
import Social from '<molecules>/Footer/Social/Social';
import Rating from '<molecules>/Article/Rating/Rating';
import useApiData from '<hooks>/useApiData';
import items from './navItems';
import social from './socialItems';
import ratingItems from './ratingItems';

const tags = [
  {
    name: 'Adventure',
    id: '1',
  },
  {
    name: 'Love',
    id: '2',
  },
  {
    name: 'Finance',
    url: '3',
  },
  {
    name: 'Design',
    id: '4',
  },
  {
    name: 'Diary',
    url: '5',
  },
];

const ArticlePage = ({ match }) => {
  const navItems = headerMapper(items);
  const queryId = match.params.id;
  const { fetchedData } = useApiData('get', `/articles/${queryId}`);
  let imageUrl = null;
  let text = null;
  let articleTitle = null;
  let articleReadingTime = null;
  let articleRating = null;
  let articleAuthor = null;

  if (fetchedData) {
    const {
      articleImage,
      body,
      title,
      readingTime,
      rating,
      user,
    } = fetchedData.data;
    const { firstName, lastName } = user;
    const author = firstName
      ? firstName.concat(' ', lastName).toUpperCase()
      : firstName;
    imageUrl = articleImage;
    text = body;
    articleTitle = title;
    articleReadingTime = readingTime;
    articleRating = rating;
    articleAuthor = author;
  }

  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <ArticleHeading
        title={articleTitle}
        readingTime={articleReadingTime}
        authorName={articleAuthor}
      />
      <ArticleBody imageUrl={imageUrl} text={text} />
      <TagRow tags={tags} />
      <FlexContainer flexDirection="row" padding="zero" paddingTop="zero">
        <Rating {...ratingItems} {...articleRating} />
        <Social {...social} />
      </FlexContainer>
      <Divider
        margin="zero"
        marginLeft="smd"
        marginTop="mdd"
        marginBottom="xl"
        width="xxxxl"
        color="lightGrey"
      />
      <ArticleProfile
        marginLeft="smd"
        readingTime={articleReadingTime}
        authorName={articleAuthor}
      />
      <CardSection
        sectionTitle="Similar Articles"
        categoryId="7c7c1381-a900-43f7-abd4-a01fb92f2717"
      />
    </PageLayout>
  );
};

ArticlePage.propTypes = {
  match: PropTypes.object,
};

export default ArticlePage;
