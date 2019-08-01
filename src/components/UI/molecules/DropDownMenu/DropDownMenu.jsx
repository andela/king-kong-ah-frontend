import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Button from '<atoms>/Button/Button';
import Overlay from '<atoms>/Overlay/Overlay';
import DropDownLink from '<molecules>/DropDownLink/DropDownLink';
import DropDownHeader from '<molecules>/DropDownHeader/DropDownHeader';

/**
 * @description - DropDownMenu component
 *
 * @returns {JSX} - DropDownMenu Component
 *
 */
const DropDownMenu = ({ title, subTitle }) => {
  const [isVisible, changeVisible] = useState(false);

  const showMenu = () => {
    changeVisible(!isVisible);
  };
  return (
    <DropDownMenu.Container>
      <Button onClick={showMenu} buttonType="dropDown">
        E
      </Button>
      {isVisible && (
        <DropDownMenu.Menu>
          <Overlay onClick={showMenu} />
          <FlexContainer
            borderColor="primary"
            boxShadow="articleCard"
            padding="zero"
            flexDirection="column"
            containerWidth="dropDownMenu"
          >
            <DropDownHeader title={title} subTitle={subTitle} />

            <FlexContainer padding="zero">
              <DropDownLink
                border={true}
                links={['Write Article', 'Article', 'Bookmarks']}
              />

              <DropDownLink links={['Profile', 'Sign Out']} />
            </FlexContainer>
          </FlexContainer>
        </DropDownMenu.Menu>
      )}
    </DropDownMenu.Container>
  );
};

DropDownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

DropDownMenu.Container = styled.div`
  ${() => `
  position: relative;
  display: inline-block;
`}
`;

DropDownMenu.Menu = styled.div`
  ${() => `

  position: fixed;
  top: 10rem;
  right: 2.7rem;
  display: inline-block;
  z-index: 1;

  animation: fadeIn ease 1s;

  @keyframes fadeIn{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

`}
`;

export default DropDownMenu;
