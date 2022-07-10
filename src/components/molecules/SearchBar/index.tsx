import Button from "@atoms/Button";
import Head from "@atoms/Head";
import Input from "@atoms/Input";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { Container } from "./styles";

type Props = {
    onSubmit?: (param?: string) => void;
    collapse?: boolean;
    title?: string;
};

const SearchBar = forwardRef<HTMLInputElement | null, Props>(
    ({ onSubmit, collapse, title }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            event.stopPropagation();
            const value = inputRef?.current?.value;
            onSubmit?.(value);
            event.currentTarget.reset();
        };

        useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

        return (
            <Container
                aria-label="search-bar-component"
                className={collapse ? "collapse" : ""}
            >
                {title && <Head level="1">{title}</Head>}
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Digite um termo..." ref={inputRef} />
                    <Button type="submit">Procurar</Button>
                </form>
            </Container>
        );
    }
);

export default SearchBar;
