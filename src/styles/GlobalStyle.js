import { createGlobalStyle } from "styled-components";
import "pretendard/dist/web/variable/pretendardvariable.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    font-family: "Pretendard Variable", Pretendard, sans-serif;
    background: #051320;
    color: #FFDBED;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;