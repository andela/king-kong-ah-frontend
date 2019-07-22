import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(
  'https://fonts.googleapis.com/css?family=Inknut+Antiqua|Roboto|M+PLUS+1p'
  );

html {
  font-size: 62.5%;
}

*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fff;
  color: #253757;
  font-family: 'Roboto', 'Inknut Antiqua', sans-serif;
  font-size: 1.6rem;
}
`;
export default GlobalStyle;
