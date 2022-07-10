import { act, fireEvent, render } from "@test";
import SearchBar from ".";

const ARIAL_LABEL_SEARCH_BAR = "search-bar-component";
const MOCK_TITLE = "search-bar-component";
const MOCK_HANDLE_SUBMIT = vi.fn();

it("must validate if the handleSubmit function is being called after clicking the button in the form of the SearchBar component", () => {
    const container = render(<SearchBar onSubmit={MOCK_HANDLE_SUBMIT} />);

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

it("must validate if the title is being displayed correctly", () => {
    const container = render(<SearchBar title={MOCK_TITLE} />);

    const containerSearchBar = container.getByRole("heading", {
        level: 1,
    }) as HTMLDivElement;

    expect(containerSearchBar.innerHTML).toEqual(MOCK_TITLE);
});
