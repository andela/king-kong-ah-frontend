import React, { Fragment } from 'react';
import styled from 'styled-components';
import theme from '<variables>/mainTheme';

const PageLoader = () => {
  return (
    <Fragment>
      <PageLoader.Container />
    </Fragment>
  );
};

PageLoader.Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #b02091;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media ${theme.device.mobileS} {
    width: 80px;
    height: 80px;
  }
  @media ${theme.device.mobileM} {
    width: 80px;
    height: 80px;
  }
  @media ${theme.device.mobileL} {
    width: 80px;
    height: 80px;
  }
  @media ${theme.device.tablet} {
    width: 80px;
    height: 80px;
  }
`;

export default PageLoader;
