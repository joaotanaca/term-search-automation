import React, { PropsWithChildren, useMemo } from "react";
import { Container } from "./styles";

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & { label?: string; error?: string };

const Input = ({
    label,
    error,
    disabled,
    ...props
}: PropsWithChildren<Props>) => {
    const renderLabel = useMemo(
        () =>
            label && !disabled ? (
                <label htmlFor={props.name}>{label}</label>
            ) : null,
        [disabled],
    );
    return (
        <Container aria-disabled={disabled} error={error}>
            {renderLabel}
            <input disabled={disabled} {...props} />
        </Container>
    );
};

export default Input;
