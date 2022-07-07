import { createGlobalStyle } from "styled-components";
import resetCss from "./resetCss";

export default createGlobalStyle`
    ${resetCss}
    body{
        font-family: 'Source Sans Pro', sans-serif;
    }
`;
