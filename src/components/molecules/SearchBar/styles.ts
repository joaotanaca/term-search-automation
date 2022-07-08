import styled from "styled-components";

export const Container = styled.form`
    width: calc(100% - 30px);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 8em auto 0 ;
    transition: all 0.5s ease-in-out;
    &.collapse {
        margin-top: 40vh;
    }
    .input-container {
        width: 50%;
        input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    button {
        padding: 10px 12px;
        font-size: 1em;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;
