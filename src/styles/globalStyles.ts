import styled from 'styled-components';

const GlobalStyles = {
  Layout: {
    mainPadding: 16,
    heights: {
      fullHeight: window.innerHeight,
      headWrapper: 40,
      monthWrapper: 50,
      switchWrapper: 25 + 28 + 25,
      bottomTapWrapper: 54,
    },
  },
  Colors: {
    black: '#000',
    white: '#FFF',
    green: '#42AA9D',
    blue: '#2663D6',
    gray: '#ACACAC',
    lightGray: 'rgb(219, 222, 227)',
  },
  ColorText: {
    Default: '#000000',
    SubText: '#808080',
    NotSelectedBottomIcons: '#979797',
    Disabled: '#717680',
  },
  Fonts: {
    Default: 'Noto Sans KR',
  },
  fontFamilyType: {
    bold: 'NotoSansKR-Bold',
    medium: 'NotoSansKR-Medium',
    regular: 'NotoSansKR-Regular',
  },
  backgroundColor: '#F5F5F5',
  BoxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 10,
    elevation: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
};

const {headWrapper, monthWrapper, switchWrapper, bottomTapWrapper, fullHeight} =
  GlobalStyles.Layout.heights;
const {mainPadding} = GlobalStyles.Layout;

/* MainComponent */
/* 컨텐츠 제외한 높이 : 이유, 컨텐츠 높이 dynamic하게 fix하기 위해 */
const heightOhterThanContents =
  headWrapper + monthWrapper + switchWrapper + bottomTapWrapper;
/* 컨텐츠 높이 = 전체 높이 - (컨텐츠 제외한 top,bottom padding 높이 + 상단 마진 높이) */
const mainContentsHeight = fullHeight - (heightOhterThanContents + mainPadding);
const contentHeight =
  fullHeight - (headWrapper + bottomTapWrapper + mainPadding);

const HorizontalPaddingWrapper = styled.div`
  padding: 0px ${mainPadding}px 0px ${mainPadding}px;
`;

const staticsContentsHeight =
  fullHeight - (headWrapper + bottomTapWrapper + 85 + mainPadding);

export {
  GlobalStyles,
  headWrapper,
  monthWrapper,
  switchWrapper,
  bottomTapWrapper,
  fullHeight,
  heightOhterThanContents,
  mainPadding,
  mainContentsHeight,
  HorizontalPaddingWrapper,
  staticsContentsHeight,
  contentHeight,
};
