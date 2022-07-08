import styled from "styled-components";

export const Container = styled.ul`
    width: fit-content;
    border-radius: 0.75em;
    background-color: #fff;
    li {
        font-size: 1em;
        line-height: 1em;
        cursor: pointer;
        h1 {
            padding: 12px 0;
            margin: 0 10px;
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
