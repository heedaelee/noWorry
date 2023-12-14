import {createGlobalStyle} from 'styled-components';
import NotoSansKRBold from '../assets/fonts/NotoSansKR-Bold.woff2';
import NotoSansKRMedium from '../assets/fonts/NotoSansKR-Medium.woff2';
import NotoSansKRRegular from '../assets/fonts/NotoSansKR-Regular.woff2';

const GlobalHtmlStyles = createGlobalStyle`
/*아래 폰트*/
@font-face {
  font-family: "NotoSansKR-Bold";
  src: local( 'NotoSansKR-Bold'), url(${NotoSansKRBold}) format('woff2');
  font-display: swap; /* 레이아웃이 바로 전환되도록 함 */
}

@font-face {
  font-family: "NotoSansKR-Medium";
  src: local( 'NotoSansKR-Medium'),url(${NotoSansKRMedium}) format('woff2');
  font-display: swap;
}

@font-face {
  font-family: "NotoSansKR-Regular" ;
  src:local( 'NotoSansKR-Regular'), url(${NotoSansKRRegular}) format('woff2');
  font-display: swap;
}

body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: inherit;
  /* 부모를 가릴경우 안보이게 함 */
  /* overflow: hidden; */
}
`;

export default GlobalHtmlStyles;
