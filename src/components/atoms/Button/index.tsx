import styled, { css } from "styled-components";

const types = {
    solid: css`
        background: #2d74ff;
        color: #ffffff;
        &:active {
            background: rgba(45, 116, 255, 0.15);
            color: #2d74ff;
        }
    `,
    filled: css`
        background: rgba(45, 116, 255, 0.15);
        color: #2d74ff;
        &:active {
            background: #2d74ff;
            color: #ffffff;
        }
    `,
    outline: css`
        background: transparent;
        color: #2d74ff;
        border: 1px solid #2d74ff;
        &:active {
            background: rgba(45, 116, 255, 0.15);
        }
    `,
    transparent: css`
        background: transparent;
        color: #2d74ff;
        &:active {
            border: 1px solid #2d74ff;
        }
    `,
};

const Button = styled.button<{
    variant?: "solid" | "filled" | "outline" | "transparent";
}>`
    font-weight: 400;
    padding: 5px 20px;
    font-size: 0.85em;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 1ms;
    ${({ variant }) => types[variant || "solid"]}
`;

export default Button;
