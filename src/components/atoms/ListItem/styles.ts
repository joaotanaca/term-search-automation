import styled from "styled-components";

export const Li = styled.li`
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    padding: 0 10px;
    font-size: 1em;
    line-height: 1em;
    cursor: pointer;
    p {
        width: 100%;
        padding: 12px 10px 12px 0;
        border-bottom: 1px solid #eaedf3;
        box-sizing: border-box;
        line-height: 1.25em;
        word-break: break-word;
    }
    &.selected {
        background-color: rgba(45, 116, 255, 0.1);
        color: #2d74ff;
        svg:first-child path {
            fill: #2d74ff;
        }
    }
    &:last-child {
        p {
            border-bottom: none;
        }
    }
`;
