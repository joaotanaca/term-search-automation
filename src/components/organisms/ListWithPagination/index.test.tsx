import { act, render } from "@test";
import { ListWithPagination } from ".";

const ARIAL_LABEL_PAGINATION = "pagination-component";
const ARIAL_LABEL = "list-pagination";
const ERROR = "ERROR MESSAGE";
const MOCK_VALUE = [{ key: "value", label: "test" }];
const MOCK_PAGE_SIZE = 10;

const generatedList = (max = 10, min = 1) => {
    const length = Math.floor(Math.random() * max) + min;
    const arrayList = [];

    for (let index = 0; index < length; index++) {
        arrayList.push({ key: "value" + index, label: "test" });
    }

    return arrayList;
};

it("must validate if the amount of li matches the size of the mocked array", () => {
    const container = render(<ListWithPagination list={MOCK_VALUE} />);
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLDivElement;
    const liElements = list.querySelectorAll("ul li");
    expect(liElements.length).toEqual(1);
});

it("must validate if the amount of li matches the size of the randomly generated array", () => {
    const arrayList = generatedList();
    const container = render(<ListWithPagination list={arrayList} />);
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const liElements = list.querySelectorAll("ul li");
    expect(liElements.length).toEqual(arrayList.length);
});

it("must validate if the error message is being displayed correctly", () => {
    const container = render(
        <ListWithPagination list={[]} messageError={ERROR} />
    );
    const message = container.getByText(ERROR);

    expect(message).toBeTruthy();
});

it("must validate if onChange is being called correctly", () => {
    const fun = vi.fn(() => {});
    const container = render(
        <ListWithPagination list={MOCK_VALUE} onChange={fun} />
    );
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const liElement = list.querySelector("ul li") as HTMLLIElement;

    act(() => {
        liElement?.click();
    });

    expect(fun).toBeCalledTimes(1);
});

it("should validate that the right svg is rendering correctly", () => {
    const container = render(
        <ListWithPagination list={MOCK_VALUE} messageError={ERROR} arrowRight />
    );
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const svgs = list.querySelectorAll("ul li svg");

    expect(svgs.length).toEqual(2);
});

it("must validate if the amount of button is correct based on mocked values", () => {
    const randomMaxNumber = Math.floor(Math.random() * 100) + 1;
    const arrayList = generatedList(randomMaxNumber , 10);

    const container = render(<ListWithPagination list={arrayList} />);
    const containerPagination = container.getByLabelText(
        ARIAL_LABEL_PAGINATION
    ) as HTMLDivElement;

    const buttonsElements = containerPagination.querySelectorAll("button");

    expect(buttonsElements.length).toEqual(
        Math.ceil(arrayList.length / MOCK_PAGE_SIZE)
    );
});
