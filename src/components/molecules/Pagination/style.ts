import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    button {
        flex: 1;
        border-radius: 0;
        &:first-child {
            border-top-left-radius: 0.4em;
            border-bottom-left-radius: 0.4em;
        }
        &:last-child {
            border-top-right-radius: 0.4em;
            border-bottom-right-radius: 0.4em;
        }
    }
`;
