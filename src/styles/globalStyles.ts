import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*아래 폰트*/
@font-face {
  font-family: "NotoSansKR-Bold";
  src: url("src/assets/fonts/NotoSansKR-Bold.ttf");
}

@font-face {
  font-family: "NotoSansKR-Medium";
  src: url("src/assets/fonts/NotoSansKR-Medium.ttf");
}

@font-face {
  font-family: "NotoSansKR-Regular" ;
  src: url("src/assets/fonts/NotoSansKR-Regular.ttf");
}

body {
  margin: 0;
  padding: 0;
  font-family: NotoSansKR-Medium sans-serif;
  /* box-sizing: border-box; */
}

* {
  box-sizing: inherit;
}

input, button, textarea {
  font-family: inherit;
}

html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
