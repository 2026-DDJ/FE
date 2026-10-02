import { createGlobalStyle } from "styled-components";
import "pretendard/dist/web/variable/pretendardvariable.css";
import AkiraExpanded from "../assets/fonts/AkiraExpanded-Demo.otf";


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

  @font-face {
    font-family: "Akira Expanded";
    src: url(${AkiraExpanded}) format("opentype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
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