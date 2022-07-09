import { sleep } from "@utils/helpers/sleep";
import { useEffect, useMemo, useState } from "react";
import List from "@molecules/List";
import SearchBar from "@molecules/SearchBar";
import api from "@services";

function App() {
    const [search, setSearch] = useState<{ key: string; label: string }[]>([]);
    const [select, setSelect] = useState<string>("");
    const [results, setResults] = useState<{
        [key: string]: { status: string; urls: string[] };
    }>({});

    const firstResult = useMemo(() => Object.keys(results)[0], [results]);

    const resultsList = useMemo(
        () =>
            results?.[select || firstResult]?.urls?.map((url) => ({
                label: url,
                key: url,
            })) || [],
        [results, select]
    );

    async function handleSubmit(value?: string) {
        const { data } = await api.post(`/crawl`, { keyword: value });

        setSearch((prev) => [
            ...prev,
            { key: data.id, label: value as string, icon: "loading" },
        ]);
    }

    useEffect(() => {
        search.forEach(async ({ key }) => {
            let data = {} as any;
            if (!results?.[key]) {
                do {
                    const response = await api.get(`/crawl/${key}`);
                    data = response.data;
                    setResults((prev) => {
                        const prevObj = Object.assign({}, prev);
                        const { status, urls } = data;
                        prevObj[data.id] = { status, urls };
                        return prevObj;
                    });
                    await sleep(2);
                } while (data?.status !== "done");
            }
        });
    }, [search]);

    return (
        <div className="App">
            <SearchBar onSubmit={handleSubmit} collapse={!!search.length} />
            {search.length ? (
                <div
                    style={{
                        width: "100%",
                        display: "inline-flex",
                        justifyContent: "center",
                        gap: 12,
                    }}
                >
                    <List onChange={setSelect} list={search} />
                    <List
                        onChange={window.open}
                        list={resultsList.slice(0, 10)}
                        icon="url"
                    />
                </div>
            ) : null}
        </div>
    );
}

export default App;
