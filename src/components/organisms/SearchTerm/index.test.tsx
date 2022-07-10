import { act, fireEvent, render } from "@test";
import { generateMockArray } from "@utils/helpers/generateMockArray";
import { SearchTerm } from ".";

const ARIAL_LABEL = "search-term-label";
const ARIAL_LABEL_PAGINATION = "pagination-component";
const ARIAL_LABEL_SEARCH_BAR = "search-bar-component";
const MOCK_RESULTS_LIST = generateMockArray(undefined, 100, 11);
const MOCK_SEARCH_TERM = generateMockArray(undefined, 20, 11);
const MOCK_HANDLE_SUBMIT = vi.fn();
const MOCK_SET_SELECT = vi.fn();

vi.mock("@context/TermSearch", () => ({
    useTermSearch: () => ({
        handleSubmit: MOCK_HANDLE_SUBMIT,
        haveSearch: true,
        setSelect: MOCK_SET_SELECT,
        resultsList: MOCK_RESULTS_LIST,
        searchTerms: MOCK_SEARCH_TERM,
    }),
}));

afterEach(() => {
    vi.resetAllMocks();
});

it("must validate if the number of buttons is equal to the size of the array divided by 10", () => {
    const container = render(<SearchTerm />);

    const containerPagination = container.getByLabelText(
        ARIAL_LABEL
    ) as HTMLDivElement;

    const [searchsPagition, resultsPagination] =
        containerPagination.querySelectorAll(
            `[aria-label="${ARIAL_LABEL_PAGINATION}"]`
        );

    const [searchsButtons, resultsButtons] = [
        searchsPagition.querySelectorAll("button"),
        resultsPagination.querySelectorAll("button"),
    ];

    expect(searchsButtons.length).toEqual(
        Math.ceil(MOCK_SEARCH_TERM.length / 10)
    );

    expect(resultsButtons.length).toEqual(
        Math.ceil(MOCK_RESULTS_LIST.length / 10)
    );
});

it("must validate if the page change is occurring correctly ", () => {
    const container = render(<SearchTerm />);

    const containerPagination = container.getByLabelText(
        ARIAL_LABEL
    ) as HTMLDivElement;

    // Pegando todos as listas
    const [searchsList, resultsList] = containerPagination.querySelectorAll(
        `[aria-label="list-component"]`
    );

    // Pegando todos o pagination
    const [searchsPagition, resultsPagination] =
        containerPagination.querySelectorAll(
            `[aria-label="${ARIAL_LABEL_PAGINATION}"]`
        );

    // Pegando todos os botoes dos paginations
    const [searchsButtons, resultsButtons] = [
        searchsPagition.querySelectorAll("button"),
        resultsPagination.querySelectorAll("button"),
    ];

    // Trocando de pagina
    act(() => {
        searchsButtons[1].click();
        resultsButtons[1].click();
    });

    // Pegando todos os elementos na listas
    const [searchsLis, resultsLis] = [
        searchsList.querySelectorAll("li"),
        resultsList.querySelectorAll("li"),
    ];

    //Validando se os labels batem com o elemento <p> dentro do <li>
    expect(searchsLis[0].querySelector("p")?.innerHTML).toContain(
        MOCK_SEARCH_TERM[10].label
    );

    expect(resultsLis[0].querySelector("p")?.innerHTML).toContain(
        MOCK_RESULTS_LIST[10].label
    );
});

it("must validate if the handleSubmit function is being called after clicking the button in the form of the SearchBar component", () => {
    const container = render(<SearchTerm />);

    const containerSearchBar = container.getByLabelText(
        ARIAL_LABEL_SEARCH_BAR
    ) as HTMLDivElement;

    const input = containerSearchBar.querySelector("input") as HTMLInputElement;
    const button = containerSearchBar.querySelector(
        "button[type='submit']"
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "termo" } });

    act(() => {
        button.click();
    });

    expect(MOCK_HANDLE_SUBMIT).toBeCalledTimes(1);
});
