import React from 'react';
import PageLayout from '<templates>/pageLayout';
import Text from '<atoms>/Text/Text';
import headerMapper from '<helpers>/headerMapper';
// import loadData from '<helpers>/dummyLoader';
import items from './navItems';

const Homepage = () => {
  const navItems = headerMapper(items);

  return (
    <PageLayout navItems={navItems}>
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

export default Homepage;
