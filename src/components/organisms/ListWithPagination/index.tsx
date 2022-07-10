import List, { ListItem, ListProps } from "@molecules/List";
import Pagination from "@molecules/Pagination";
import { useMemo, useState } from "react";
import { Container } from "./styles";

type ListWithPaginationProps = ListProps & {
    list: ListItem[];
};

export function ListWithPagination({
    list,
    ...props
}: ListWithPaginationProps) {
    const [page, setPage] = useState(1);

    const [initialResults, endResults] = useMemo(
        () => [(page - 1) * 10, page * 10],
        [page]
    );
    const listSlice = useMemo(
        () => list.slice(initialResults, endResults),
        [list, initialResults, endResults]
    );

    const renderPagination = useMemo(
        () =>
            list.length > 10 && (
                <Pagination length={list.length} onChange={setPage} />
            ),
        [list]
    );
    return (
        <Container>
            <List list={listSlice} {...props} />

            {renderPagination}
        </Container>
    );
}
