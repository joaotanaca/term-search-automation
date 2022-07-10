import { createGlobalStyle } from "styled-components";
import resetCss from "./resetCss";

export default createGlobalStyle`
    ${resetCss}
    html{
        font-size:16px;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
        .App{
            width: calc(100% - 20px);
            max-width: 768px;
            margin: 0 auto;
        }
    }
    *{
        transition: all 0.5s ease-out;
    }
`;
