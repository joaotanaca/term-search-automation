import { createGlobalStyle } from "styled-components";
import resetCss from "./resetCss";

export default createGlobalStyle`
    ${resetCss}
    html{
        font-size:16px;
    }
    body{
        font-family: 'Source Sans Pro', sans-serif;
        text-rendering: optimizeLegibility;
    }
`;
