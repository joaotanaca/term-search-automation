import styled from "styled-components";

export const Container = styled.ul`
    width: 31%;
    height: fit-content;
    border-radius: 0.75em;
    background-color: #fff;
    display: inline-flex;
    flex-direction: column;
    border: 1px solid #eaedf3;
    color: #364663;
    overflow: hidden;
    li {
        padding-left: 10px;
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        font-size: 1em;
        line-height: 1em;
        cursor: pointer;
        p {
            width: 100%;
            margin-right: 10px;
            padding: 12px 10px 12px 0;
            border-bottom: 1px solid #eaedf3;
            word-break: break-all;
        }
        &.selected {
            background-color: rgba(45, 116, 255, 0.1);
        }
        &:last-child {
            p {
                border-bottom: none;
            }
        }
    }
`;
