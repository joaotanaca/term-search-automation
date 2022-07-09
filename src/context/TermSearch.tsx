import { Icon } from "@atoms/Icons";
import api from "@services";
import { sleep } from "@utils/helpers/sleep";
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

type SearchTermsType = { key: string; label: string; icon?: Icon }[];

type ResultTermsType = {
    [key: string]: { status: string; urls: string[] };
};

const TermSearchContext = createContext({
    handleSubmit(value?: string) {},
    resultsList: [] as SearchTermsType,
    searchTerms: [] as SearchTermsType,
    setSelect(value: string) {},
    haveSearch: false,
});

export const TermSearchProvider = ({ children }: PropsWithChildren) => {
    const [searchTerms, setSearchTerms] = useState<SearchTermsType>([]);
    const [select, setSelect] = useState<string>("");
    const [resultsTerms, setResultsTerms] = useState<ResultTermsType>({});

    // Resgata a primeira propriedade do estado results
    const firstResult = useMemo(
        () => Object.keys(resultsTerms)[0],
        [resultsTerms]
    );

    // Resgata a primeira propriedade do estado results
    const resultsList = useMemo(
        () =>
            resultsTerms?.[select || firstResult]?.urls?.map((url) => ({
                label: url,
                key: url,
            })) || [],
        [resultsTerms, select]
    );

    // Resgata o termo no campo de busca
    async function handleSubmit(value?: string) {
        // Cadastra o termo, pegando o id retornado
        const { data } = await api.post(`/crawl`, { keyword: value });

        // Salva o termo e o id retornado
        setSearchTerms((prev) => [
            ...prev,
            { key: data.id, label: value as string, icon: "loading" },
        ]);
    }

    useEffect(() => {
        searchTerms.forEach(async ({ key }, index, array) => {
            // Cria uma variavel para receber a resposta e validar se status está 'done'
            let response = {} as any;
            // Valida  se existe uma propriedade em resultsTerms, se sim é por que tem um do while em andamento
            if (!resultsTerms?.[key]) {
                do {
                    // Verificando se o cadastro está com o status "done"
                    const { data } = await api.get(`/crawl/${key}`);

                    response = data;

                    setResultsTerms((prev) => {
                        const prevObj = Object.assign({}, prev);
                        prevObj[response.id] = response;
                        return prevObj;
                    });

                    await sleep(2);
                    // Valida se o status é done, se sim, roda novamente a rotina, esperando 2 segundos
                } while (response?.status !== "done");

                setSearchTerms((prev) => {
                    const prevSearch = [...prev];
                    prevSearch[index]["icon"] = "done";
                    console.log(prevSearch[index]);
                    
                    return prevSearch;
                });
            }
        });
    }, [searchTerms]);

    return (
        <TermSearchContext.Provider
            value={{
                handleSubmit,
                resultsList,
                searchTerms,
                setSelect,
                haveSearch: !!searchTerms?.length,
            }}
        >
            {children}
        </TermSearchContext.Provider>
    );
};

export const useTermSearch = () => useContext(TermSearchContext);
