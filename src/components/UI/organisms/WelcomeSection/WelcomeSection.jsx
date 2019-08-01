import React from 'react';
import styled from 'styled-components';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import SearchBar from '<molecules>/SearchBar/SearchBar';
import Image from '<atoms>/Image/Image';
import Title from '<atoms>/Title/Title';
import imageUrl from '<image>/homepage.png';

const WelcomeSection = () => {
  return (
    <WelcomeSection.Container>
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
          fontSize='xlarge'
          textAlign='center'
          paddingBottom='xxl'
          fontWeight='heavy'>
          What If you could read any experience you want
        </Title>
        <SearchBar getStarted={false}> </SearchBar>
      </FlexContainer>
    </WelcomeSection.Container>
  );
};

WelcomeSection.Container = styled.div`
${({ theme }) => `
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media ${theme.device.mobileS} {
    flex-direction: column;
  }
  @media ${theme.device.mobileM} {
    flex-direction: column;
  }
  @media ${theme.device.mobileL} {
    flex-direction: column;
  }
  @media ${theme.device.tablet} {
    flex-direction: column;
  }
`}`;

export default WelcomeSection;
