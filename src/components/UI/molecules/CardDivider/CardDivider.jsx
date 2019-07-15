/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Divider from '<atoms>/Divider/Divider';
import Text from '<atoms>/Text/Text';
import spacing from '<variables>/spacing';
import { fontSizes } from '<variables>/fonts';

/**
 * @description - CardDivider Component
 *
 * @prop {string} text - divider text
 * @prop {string} width - maxWidth
 * @prop {string} margin - margin
 * @prop {string} fontSize - font Size
 * @prop {string} display - container display
 *
 * @return {component} CardDivider
 */
const CardDivider = ({
  text,
  width,
  margin,
  fontSize,
  display,
}) => {
  return (
    <CardDivider.Container>
      <FlexContainer
        display={display}
        margin={margin}
      >
        {renderDivider()}
        {text && (renderText())}
        {text && (renderDivider())}
      </FlexContainer>
    </CardDivider.Container>
  );

  function renderDivider() {
    return (
      <Divider
        width={width}
      />
    );
  }
  function renderText() {
    return (
      <Text
        fontSize={fontSize}
        color="primary"
        fontWeight="bold"
      >
        {text}
      </Text>
    );
  }
};

CardDivider.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  width: PropTypes.oneOf(Object.keys(spacing)),
  margin: PropTypes.oneOf(Object.keys(spacing)),
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
};

CardDivider.defaultProps = {
  display: 'block',
  cardDividerPadding: 'sm',
};

CardDivider.Container = styled.div`
  text-align: center;
`;

export default CardDivider;
