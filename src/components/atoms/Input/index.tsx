import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & { label?: string; error?: string };

const Input = ({ label, error, ...props }: PropsWithChildren<Props>) => {
    return (
        <Container error={error}>
            {label && <label htmlFor={props.name}>{label}</label>}
            <input {...props} />
        </Container>
    );
};

export default Input;
