import { act, render } from "@test";
import ListItem from ".";

const ARIAL_LABEL = "list-item-component";
const ERROR = "ERROR MESSAGE";
const MOCK_VALUE = [{ key: "value", label: "test" }];

it("must validate if onChange is being called correctly", () => {
    const fun = vi.fn(() => {});
    const container = render(
        <ListItem
            label="test"
            icon="loading"
            onClick={fun}
            arrowRight={false}
        />
    );
    const li = container.getByLabelText(ARIAL_LABEL) as HTMLLIElement;

    act(() => {
        li?.click();
    });

    expect(fun).toBeCalledTimes(1);
});

it("should validate that the left svg is rendering correctly", () => {
    const container = render(
        <ListItem label="test" icon="loading" arrowRight={false} />
    );
    const li = container.getByLabelText(ARIAL_LABEL) as HTMLLIElement;
    const svg = li.querySelector("svg");

    expect(svg).toBeTruthy();
});

it("should validate that the right svg is rendering correctly", () => {
    const container = render(
        <ListItem label="test" icon="loading" arrowRight />
    );
    const li = container.getByLabelText(ARIAL_LABEL) as HTMLLIElement;
    const svgs = li.querySelectorAll("svg");

    expect(svgs.length).toEqual(2);
});
