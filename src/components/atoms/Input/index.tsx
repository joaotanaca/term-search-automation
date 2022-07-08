import React, { forwardRef, PropsWithChildren, useMemo } from "react";
import { Container } from "./styles";

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string;
    error?: string;
};

const Input = forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
    ({ label, error, disabled, ...props }, ref) => {
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
                <input {...props} ref={ref} disabled={disabled} />
            </Container>
        );
    }
);

export default Input;
