import styled from "styled-components";

export const Container = styled.div`
    padding: 0 1em;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: inline-flex;
    gap: 4em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.collapse {
        gap: 2em;
        height: 30vh;
    }
    form {
        width: 100%;
        transition: all 0.5s ease-in-out;
        display: flex;
        justify-content: center;
        box-sizing: border-box;

        .input-container {
            width: 100%;
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
