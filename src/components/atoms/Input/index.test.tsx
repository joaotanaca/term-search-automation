import { render, fireEvent, renderer } from "@test";
import Input from ".";

const ARIAL_LABEL = "test-label";
const NAME = "test-input";
const ERROR = "ERROR DESCRIPTION";

it("must validate if the value changes", () => {
    const container = render(<Input aria-label={ARIAL_LABEL} />);
    const input = container.getByLabelText(ARIAL_LABEL) as HTMLInputElement;

    expect(input.value).toEqual("");

    fireEvent.change(input, { target: { value: "23" } });

    expect(input.value).toEqual("23");
});

it("must validate if the name attribute is being correctly assigned", () => {
    const container = render(<Input name={NAME} aria-label={ARIAL_LABEL} />);
    const input = container.getByLabelText(ARIAL_LABEL) as HTMLInputElement;

    expect(input.name).toEqual(NAME);
});

it("must validate if the disabled attribute is being correctly assigned", () => {
    const container = render(
        <Input disabled={true} aria-label={ARIAL_LABEL} />
    );
    const input = container.getByLabelText(ARIAL_LABEL) as HTMLInputElement;

    expect(input.disabled).toBeTruthy();

    fireEvent.change(input, { target: { disabled: false } });

    expect(input.disabled).toBeFalsy();
});

it("validate if the snapshot has the error styling", async () => {
    const container = renderer
        .create(<Input error={ERROR} aria-label={ARIAL_LABEL} />)
        .toJSON();

    expect(container).toMatchSnapshot();
});
