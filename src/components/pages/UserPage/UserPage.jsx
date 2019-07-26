/* eslint-disable max-len */
import React from 'react';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';
import items from './navItems';
import WriteArticleSection from '<organisms>/WriteArticleSection/WriteArticleSection';
import CardSection from '<organisms>/CardSection/CardSection';
import RatingsSection from '<organisms>/RatingsSection/RatingsSection';
import ImageText from '<molecules>/ImageText/ImageText';
import Footer from '<organisms>/Footer/Footer';
import footerItems from '../Home/footerItems';
import tags from './tags';
import TagRow from '<molecules>/TagRow/TagRow';

const UserPage = () => {
  const navItems = headerMapper(items);
  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <WriteArticleSection/>
      <TagRow tags={tags}/>
      <CardSection
        title='Popular Article'
        categoryId='4df25c1f-4224-4c7b-9807-2711dd337897'
      />
      <CardSection
        title='Featured Article'
        categoryId='7c7c1381-a900-43f7-abd4-a01fb92f2717'
      />
      <ImageText
        imageUrl="https://www.cubesmart.com/blog/wp-content/uploads/Brooklyn-Bridge-at-Night-1140x704.jpg"
        title="New York City"
        author="By : Emmy Joans"
        description="New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers."
      />
      <RatingsSection fontSize='rating'/>
      <Footer {...footerItems}/>
    </PageLayout>
  );
};

export default UserPage;
