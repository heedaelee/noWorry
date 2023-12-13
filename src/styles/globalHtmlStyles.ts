import {createGlobalStyle} from 'styled-components';
import NotoSansKRBold from '../assets/fonts/NotoSansKR-Bold.woff2';
import NotoSansKRMedium from '../assets/fonts/NotoSansKR-Medium.woff2';
import NotoSansKRRegular from '../assets/fonts/NotoSansKR-Regular.woff2';

const GlobalHtmlStyles = createGlobalStyle`
/*아래 폰트*/
@font-face {
  font-family: "NotoSansKR-Bold";
  src: url(${NotoSansKRBold}) format('woff2') ;
}

@font-face {
  font-family: "NotoSansKR-Medium";
  src: url(${NotoSansKRMedium}) format('woff2');
}

@font-face {
  font-family: "NotoSansKR-Regular" ;
  src: url(${NotoSansKRRegular}) format('woff2');
}

body {
  margin: 0;
  padding: 0;
  font-family: NotoSansKR-Medium, sans-serif;
  /* box-sizing: border-box; */
}
* {
  box-sizing: inherit;
  /* 부모를 가릴경우 안보이게 함 */
  /* overflow: hidden; */
}
`;

export default GlobalHtmlStyles;
