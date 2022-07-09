import { render } from "@test";
import Icons from ".";
import icons from "./svg";

it("must validate if all icons are being rendered", () => {
    Object.keys(icons).forEach((icon: any) => {
        const label = `${icon}-label`;
        const container = render(<Icons icon={icon} />);
        const iconComponent = container.getByLabelText(label);

        expect(iconComponent.getAttribute("aria-label")).toEqual(label);
    });
});
