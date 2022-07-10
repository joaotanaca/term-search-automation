import Button from "@atoms/Button";
import { useEffect, useMemo, useState } from "react";
import { Container } from "./style";

type Props = {
    length: number;
    pageSize?: number;
    onChange?: (page: number) => void;
};

const Pagination = ({ length, pageSize = 10, onChange }: Props) => {
    const [pageActive, setPage] = useState(1);
    const [pagesButtons, setPagesButtons] = useState<number[]>([]);
    const pages = useMemo(
        () => Math.ceil(length / pageSize),
        [length, pageSize]
    );

    useEffect(() => {
        onChange?.(pageActive);
    }, [pageActive]);

    useEffect(() => {
        const pagesButtons = [];
        for (let index = 1; index <= pages; index++) {
            pagesButtons.push(index);
        }
        setPagesButtons(pagesButtons);
    }, [pages]);

    return (
        <Container aria-label="pagination-component">
            {pagesButtons.map((page) => (
                <Button
                    key={page}
                    onClick={() => setPage(page)}
                    variant={pageActive === page ? "solid" : "filled"}
                >
                    {page}
                </Button>
            ))}
        </Container>
    );
};

export default Pagination;
