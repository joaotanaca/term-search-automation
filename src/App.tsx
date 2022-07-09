import List from "@molecules/List";
import SearchBar from "@molecules/SearchBar";
import { useTermSearch } from "@context/TermSearch";

function App() {
    const { handleSubmit, haveSearch, setSelect, resultsList, searchTerms } =
        useTermSearch();
    return (
        <div className="App">
            <SearchBar onSubmit={handleSubmit} collapse={haveSearch} />
            {haveSearch ? (
                <div
                    style={{
                        width: "100%",
                        display: "inline-flex",
                        justifyContent: "center",
                        gap: 12,
                    }}
                >
                    <List onChange={setSelect} list={searchTerms} />
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
