import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../UI/organisms/Header/Header';

/**
 * @description - Page layout
 *
 * @prop {children} children - children
 * @prop {navItems} children - navigation items
 *
 * @return {Header} Page layout
 */
const PageLayout = ({ children, navItems }) => {
  // const [isLoaded, setIsLoaded] = useState(initialState);

  // const dataLoader = async () => {
    // await callback();
  // setIsLoaded(true);
  // };

  // if (isLoaded) {
  return (
    <Fragment>
      <Header navItems={navItems} />
      <PageLayout.Container>
        <Loader type="Rings" color="#B02091" height="100" width="100" />
        {children}
      </PageLayout.Container>
    </Fragment>
  );
  // }

  // return (
  //   dataLoader() && (
  //     <PageLayout.Container justifyContent="center" alignItems="center">
  //       <Loader type="Rings" color="#B02091" height="100" width="100" />
  //     </PageLayout.Container>
  //   )
  // );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navItems: PropTypes.array.isRequired,
};

PageLayout.Container = styled.div`
  ${({ justifyContent, alignItems }) => `
    height: 100vh;
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
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
