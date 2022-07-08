import Button from "@atoms/Button";
import Input from "@atoms/Input";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { Container } from "./styles";

const SearchBar = forwardRef<
    HTMLInputElement | null,
    {
        onSubmit?: (param?: string) => void;
        collapse?: boolean;
    }
>(({ onSubmit, collapse }, ref) => {
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
        <Container className={collapse ? "collapse" : ""}>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Digite um termo..." ref={inputRef} />
                <Button type="submit">Procurar</Button>
            </form>
        </Container>
    );
});

export default SearchBar;
