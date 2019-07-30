import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import Title from '<atoms>/Title/Title';
import IconRow from '<molecules>/IconRow/IconRow';
import { iconNames } from '<variables>/icons';


const Social = ({
  title,
  titleFontSize,
  titleWidth,
  icons,
  titleColor,
  titleMarginBottom,
  titleMarginRight,
  titleMarginLeft,
  titlePaddingBottom,
  iconJustifyContent,
  iconAlignItems,
  iconColor,
  iconBackgroundColor,
  iconContainerWidth,
  iconMarginLeft,
  socialBackgroundColor,
  socialJustifyContent,
  socialPaddingTop,
  hasBottomBorder,
}) => (
  <FlexContainer
    backgroundColor={socialBackgroundColor}
    padding="zero"
    justifyContent={socialJustifyContent}
    paddingTop={socialPaddingTop}
  >
    <Fragment>
      <Title
        color={titleColor}
        textAlign='center'
        fontSize={titleFontSize}
        hasBottomBorder={hasBottomBorder}
        marginBottom={titleMarginBottom}
        marginRight={titleMarginRight}
        marginLeft={titleMarginLeft}
        paddingBottom={titlePaddingBottom}
        titleWidth={titleWidth}
      >
        {title}
      </Title>
      <IconRow
        icons={icons}
        justifyContent={iconJustifyContent}
        color={iconColor}
        aliignItems={iconAlignItems}
        backgroundColor={iconBackgroundColor}
        containerWidth={iconContainerWidth}
        marginLeft={iconMarginLeft}
      />
    </Fragment>
  </FlexContainer>
);

Social.defaultProps = {
  titleColor: 'white001',
  titleMarginBottom: 'xxs',
  titleMarginRight: 'smm',
  titleMarginLeft: 'smm',
  titlePaddingBottom: 'xsm',
  socialBackgroundColor: 'primary',
  socialJustifyContent: 'space-between',
  hasBottomBorder: true,
};

Social.propTypes = {
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.string,
  titleWidth: PropTypes.string,
  titleColor: PropTypes.string,
  titleMarginBottom: PropTypes.string,
  titleMarginRight: PropTypes.string,
  titleMarginLeft: PropTypes.string,
  titlePaddingBottom: PropTypes.string,
  iconJustifyContent: PropTypes.string,
  iconAlignItems: PropTypes.string,
  iconColor: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  iconMarginLeft: PropTypes.string,
  iconContainerWidth: PropTypes.string,
  socialBackgroundColor: PropTypes.string,
  socialJustifyContent: PropTypes.string,
  socialPaddingTop: PropTypes.string,
  hasBottomBorder: PropTypes.bool,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
      isExternal: PropTypes.bool.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};
export default Social;
