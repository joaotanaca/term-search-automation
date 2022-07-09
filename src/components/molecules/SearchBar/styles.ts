import styled from "styled-components";

export const Container = styled.div`
    padding: 0 1em;
    box-sizing: border-box;
    form {
        width: 100%;
        height: 100vh;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
        box-sizing: border-box;
        &.collapse {
            height: 30vh;
        }
        .input-container {
            width: 60%;
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
    }
`;
