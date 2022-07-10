import { useMemo } from "react";
import { useTermSearch } from "@context/TermSearch";
import SearchBar from "@molecules/SearchBar";
import { removeHostname } from "@utils/helpers/removeHostname";
import { ListWithPagination } from "../ListWithPagination";

import { Container } from "./styles";

export function SearchTerm() {
    const { handleSubmit, haveSearch, setSelect, resultsList, searchTerms } =
        useTermSearch();

    const resultsWithoutHostname = useMemo(
        () =>
            resultsList.map((result) => ({
                ...result,
                label: removeHostname(result.label),
            })),
        [resultsList]
    );
    return (
        <Container aria-label="search-term-label">
            <SearchBar
                onSubmit={handleSubmit}
                collapse={haveSearch}
                title={"Automação de busca de termos"}
            />
            {haveSearch ? (
                <div className="list-container">
                    <div className="list-container-left">
                        <ListWithPagination
                            onChange={setSelect}
                            list={searchTerms}
                            arrowRight
                        />
                    </div>
                    <div className="list-container-right">
                        <ListWithPagination
                            onChange={window.open}
                            messageError="Nenhuma url relacionada ao termo encontrada"
                            list={resultsWithoutHostname}
                            icon="url"
                        />
                    </div>
                </div>
            ) : null}
        </Container>
    );
}
