import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import spacing from '<variables>/spacing';
import StyledLink from '<atoms>/StyledLink/StyledLink';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';


/**
 * @description - DropDownLink Component
 *
 * @prop {array} links - links for the drop down
 * @prop {bool} border - children
 *
 * @return {component} DropDownLink
 */
const DropDownLink = ({ links, border }) => (
  <DropDownLink.Container
    links={links}
    border={border}>

    <FlexContainer padding="zero">
      {links.map((linkText) => {
        const link = linkText.toLowerCase().replace(/ /g, '');
        return (<StyledLink
          key={linkText}
          isExternal={false}
          dropdown='true'
          to={link === 'signout' ? '/' : link}
          fontSize='medium'
          padding='xs'
          paddingTop='zero'
          textAlign="left" >
          {linkText}
        </StyledLink>);
      })}
    </FlexContainer>

  </DropDownLink.Container>


);

DropDownLink.propTypes = {

  padding: PropTypes.oneOf(Object.keys(spacing)),
  links: PropTypes.array,
  border: PropTypes.bool,
};

DropDownLink.defaultProps = {
  border: false,
};

DropDownLink.Container = styled.span`
  ${({
    border,
  }) => `

${border && 'border-bottom: 2px solid #ABA6A6;'}

width: 100%;
`}
`;
export default DropDownLink;
