import { act, render } from "@test";
import Pagination from ".";

const ARIAL_LABEL = "pagination-component";
const MOCK_LENGTH = 10 * 10;
const MOCK_PAGE_SIZE = 10;
const MOCK_BUTTONS_LENGTH = MOCK_LENGTH / MOCK_PAGE_SIZE;

it("must validate if the amount of button is correct based on mocked values", () => {
    const container = render(<Pagination length={MOCK_LENGTH} />);
    const containerPagination = container.getByLabelText(
        ARIAL_LABEL
    ) as HTMLDivElement;

    const buttonsElements = containerPagination.querySelectorAll("button");

    expect(buttonsElements.length).toEqual(MOCK_BUTTONS_LENGTH);
});

it("must validate if the number of random clicks is being executed the number of times requested", () => {
    const randomNumberToClick =
        Math.floor(Math.random() * MOCK_BUTTONS_LENGTH) + 1;
    const fun = vi.fn(() => {});

    const container = render(
        <Pagination length={MOCK_LENGTH} onChange={fun} />
    );
    const containerPagination = container.getByLabelText(
        ARIAL_LABEL
    ) as HTMLDivElement;

    const buttonsElements = containerPagination.querySelectorAll("button");

    for (let index = 0; index < randomNumberToClick; index++) {
        act(() => {
            buttonsElements[index]?.click();
        });
    }

    expect(fun).toBeCalledTimes(randomNumberToClick);
});
