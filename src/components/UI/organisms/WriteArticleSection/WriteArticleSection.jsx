import React from 'react';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Image from '<atoms>/Image/Image';
import Title from '<atoms>/Title/Title';
import ImageUrl from '<image>/homepage.png';
import SearchBar from '<molecules>/SearchBar/SearchBar';

const DashboardWelcome = () => (
  <FlexContainer justifyContent='space-between'>
    <FlexContainer flexDirection='row'>
      <FlexContainer
        justifyContent='center'
        alignItems='center'
        containerWidth='oneThird'
      >
        <Image
          imageUrl={ImageUrl}
          boxShadow='none'
          altText='welcome'
        />
      </FlexContainer>
      <FlexContainer justifyContent='center' alignItems='center'>
        <Title
          fontSize='xlarge'
          textAlign='center'
          paddingBottom='xxl'
          fontWeight='heavy'>
              Start writing now
        </Title>
        <SearchBar getStarted={false}> </SearchBar>
      </FlexContainer>
    </FlexContainer>
  </FlexContainer>
);

export default DashboardWelcome;
