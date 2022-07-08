import styled from "styled-components";

export const Container = styled.ul`
    width: fit-content;
    border-radius: 0.75em;
    padding: 0 10px;
    background-color: #fff;
    display: inline-flex;
    flex-direction: column;
    border: 1px solid #eaedf3;
    li {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        font-size: 1em;
        line-height: 1em;
        cursor: pointer;
        h1 {
            width: 100%;
            padding: 12px 10px 12px 0;
            border-bottom: 1px solid #eaedf3;
        }
        &.selected {
            background-color: rgba(45, 116, 255, 0.1);
        }
        &:last-child {
            h1 {
                border-bottom: none;
            }
        }
    }
`;
