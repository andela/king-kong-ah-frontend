import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '<organisms>/Header/Header';
import PageLoader from './PageLoader';

/**
 * @description - Page layout
 *
 * @prop {children} children - children
 * @prop {navItems} navItems - navigation items
 * @prop {callback} callback callback
 * @return {Header} Page layout
 */
const PageLayout = ({ children, navItems, callback }) => {
  const [isLoading, setIsLoaded] = useState(true);

  const pageData = async () => {
    try {
      await callback();
    } catch (err) {
      // console.log('callback is undefined');
    }
    setIsLoaded(false);
  };

  useEffect(() => {
    pageData();
  }, [isLoading]);

  return isLoading ? (
    <PageLayout.Container justifyContent="center" alignItems="center">
      <PageLoader />
    </PageLayout.Container>
  ) : (
    <Fragment>
      <Header navItems={navItems} />
      <PageLayout.Container>{children}</PageLayout.Container>
    </Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navItems: PropTypes.array.isRequired,
  callback: PropTypes.func,
};

PageLayout.Container = styled.div`
  ${({ justifyContent, alignItems }) => `
    height: 100vh;
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: column;
`}
`;

PageLayout.defaultProps = {
  initialState: 'true',
  display: 'flex',
  callback: () => {
    throw new Error('callback is undefined');
  },
};
export default PageLayout;
