import {createGlobalStyle} from 'styled-components';
import NotoSansKRBold from '../assets/fonts/NotoSansKR-Bold.woff';
import NotoSansKRMedium from '../assets/fonts/NotoSansKR-Medium.woff';
import NotoSansKRRegular from '../assets/fonts/NotoSansKR-Bold.woff';

const GlobalHtmlStyles = createGlobalStyle`
/*아래 폰트*/
@font-face {
  font-family: "NotoSansKR-Bold";
  src: url(${NotoSansKRBold}) format('woff') ;
}

@font-face {
  font-family: "NotoSansKR-Medium";
  src: url(${NotoSansKRMedium}) format('woff');
}

@font-face {
  font-family: "NotoSansKR-Regular" ;
  src: url(${NotoSansKRRegular}) format('woff');
}

body {
  margin: 0;
  padding: 0;
  font-family: NotoSansKR-Medium, sans-serif;
  /* box-sizing: border-box; */
}



* {
  box-sizing: inherit;
}
`;

export default GlobalHtmlStyles;
