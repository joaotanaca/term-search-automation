import Button from "@atoms/Button";
import Input from "@atoms/Input";
import React, { useRef } from "react";
import { Container } from "./styles";

const SearchBar = ({
    onSubmit,
    collapse,
}: {
    onSubmit?: (param?: string) => void;
    collapse?: boolean;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const value = inputRef?.current?.value;
        onSubmit?.(value);
        event.currentTarget.reset();
    };

    return (
        <Container
            className={collapse ? "collapse" : ""}
            onSubmit={handleSubmit}
        >
            <Input inputRef={inputRef} placeholder="Digite um termo..." />
            <Button type="submit">Procurar</Button>
        </Container>
    );
};

export default SearchBar;
