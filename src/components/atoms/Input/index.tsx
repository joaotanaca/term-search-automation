import React, { PropsWithChildren, useMemo } from "react";
import { Container } from "./styles";

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string;
    error?: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
};

const Input = ({
    label,
    error,
    disabled,
    inputRef,
    ...props
}: PropsWithChildren<Props>) => {
    const renderLabel = useMemo(
        () =>
            label && !disabled ? (
                <label htmlFor={props.name}>{label}</label>
            ) : null,
        [disabled]
    );
    return (
        <Container
            className="input-container"
            aria-disabled={disabled}
            error={error}
        >
            {renderLabel}
            <input ref={inputRef} {...props} disabled={disabled} />
        </Container>
    );
};

export default Input;
