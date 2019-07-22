import React from 'react';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';
import items from './navItems';
import RatingsSection from '<organisms>/RatingsSection/RatingsSection';
import WelcomeSection from '<organisms>/WelcomeSection/WelcomeSection';
import ImageText from '<molecules>/ImageText/ImageText';

const HomePage = () => {
  const navItems = headerMapper(items);

  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <WelcomeSection />
      <ImageText
        imageUrl="https://www.cubesmart.com/blog/wp-content/uploads/Brooklyn-Bridge-at-Night-1140x704.jpg"
        title="New York City"
        author="By : Emmy Joans"
        description="New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers."
      />
      <RatingsSection fontSize='rating'/>
    </PageLayout>
  );
};

export default HomePage;
