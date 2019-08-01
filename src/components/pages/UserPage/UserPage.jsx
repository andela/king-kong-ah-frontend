import React from 'react';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import displayLoader from '<helpers>/displayLoader';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import imageUrl from '<image>/homepage.png';
import items from './navItems';
import Title from '<atoms>/Title/Title';
import SearchBar from '<molecules>/SearchBar/SearchBar';

const UserPage = () => {
  const navItems = headerMapper(items);

  return (
    <PageLayout navItems={navItems} callback={displayLoader}>
      <FlexContainer justifyContent='space-between'>
        <FlexContainer flexDirection='row'>
          <FlexContainer
            justifyContent='center'
            alignItems='center'
            containerWidth='fullWidth'
          >
            <Image
              imageUrl={imageUrl}
              boxShadow='none'
              altText='welcome'
            />
          </FlexContainer>
          <FlexContainer justifyContent='center' alignItems='center'>
            <Title
              fontSize='sxlarge'
              textAlign='center'
              paddingBottom='xxl'
              fontWeight='heavy'>
              What If you could read any experience you want
            </Title>
            <SearchBar getStarted={false}> </SearchBar>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PageLayout>
  );
};

export default UserPage;
