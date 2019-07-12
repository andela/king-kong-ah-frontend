import React from 'react';
import PageLayout from '<templates>/PageLayout/PageLayout';
import Text from '<atoms>/Text/Text';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';
import items from './navItems';

const HomePage = () => {
  const navItems = headerMapper(items);

  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <Text
        content="true"
        textTransform="uppercase"
        padding="md"
        fontWeight="normal"
        display="inline"
        fontSize="normal"
        textAlign="center"
        color="primary"
      >
        Welcome to Authors Haven
      </Text>
    </PageLayout>
  );
};

export default HomePage;
