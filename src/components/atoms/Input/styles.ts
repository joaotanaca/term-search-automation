import styled, { css } from "styled-components";

export const Container = styled.div<{ error?: string }>`
    font-weight: 400;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5em;
    label {
        color: #2d74ff;
        font-size: 0.85em;
        font-weight: inherit;
    }
    input {
        padding: 10px 0 10px 12px;
        border: none;
        outline: none;
        background: #eaedf3;
        border-radius: 0.5em;
        color: #364663;
        font-size: 1em;
        font-weight: inherit;
        &:disabled {
            background-color: #eaedf3;
            color: #96a6c2;
        }
    }

    ${({ error, "aria-disabled": ariaDisabled }) =>
        error &&
        !ariaDisabled &&
        css`
            label {
                color: #ff2d2d;
            }
            input {
                border: 1px solid #ff2d2d;
                background-color: rgba(255, 45, 45, 0.1);
                color: #ff2d2d;
            }
            ::after {
                content: "${error}";
                font-size: 0.85em;
                color: #364663;
                font-weight: inherit;
            }
        `}
`;
