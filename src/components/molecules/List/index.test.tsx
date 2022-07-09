import { act, render } from "@test";
import List from ".";

const ARIAL_LABEL = "list-component";
const ERROR = "ERROR MESSAGE";
const MOCK_VALUE = [{ key: "value", label: "test" }];

it("must validate if the amount of li matches the size of the mocked array", () => {
    const container = render(<List list={MOCK_VALUE} />);
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const liElements = list.querySelectorAll("li");
    expect(liElements.length).toEqual(1);
});

it("must validate if the amount of li matches the size of the randomly generated array", () => {
    const length = Math.floor(Math.random() * 10) + 1;
    const arrayList = [];

    for (let index = 0; index < length; index++) {
        arrayList.push({ key: "value" + index, label: "test" });
    }

    const container = render(<List list={arrayList} />);
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const liElements = list.querySelectorAll("li");
    expect(liElements.length).toEqual(arrayList.length);
});

it("must validate if the error message is being displayed correctly", () => {
    const container = render(<List list={[]} messageError={ERROR} />);
    const message = container.getByText(ERROR);

    expect(message).toBeTruthy();
});

it("must validate if onChange is being called correctly", () => {
    const fun = vi.fn(() => {});
    const container = render(<List list={MOCK_VALUE} onChange={fun} />);
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const liElement = list.querySelector("li");

    act(() => {
        liElement?.click();
    });

    expect(fun).toBeCalledTimes(1);
});

it("should validate that the right svg is rendering correctly", () => {
    const container = render(
        <List list={MOCK_VALUE} messageError={ERROR} arrowRight />
    );
    const list = container.getByLabelText(ARIAL_LABEL) as HTMLUListElement;
    const svgs = list.querySelectorAll("li svg");

    expect(svgs.length).toEqual(2);
});
