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
    }
`;
