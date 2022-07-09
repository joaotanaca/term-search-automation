import { renderer } from "@test";
import "jest-styled-components";
import Button from ".";

it("must validate if the solid variant is being applied", () => {
    const tree = renderer.create(<Button variant="solid" />).toJSON();
    expect(tree).toHaveStyleRule("background", "#2d74ff");
    expect(tree).toHaveStyleRule("color", "#ffffff");
});

it("must validate if the filled variant is being applied", () => {
    const tree = renderer.create(<Button variant="filled" />).toJSON();
    expect(tree).toHaveStyleRule("background", "rgba(45,116,255,0.15)");
    expect(tree).toHaveStyleRule("color", "#2d74ff");
});

it("must validate if the outline variant is being applied", () => {
    const tree = renderer.create(<Button variant="outline" />).toJSON();
    expect(tree).toHaveStyleRule("background", "transparent");
    expect(tree).toHaveStyleRule("color", "#2d74ff");
    expect(tree).toHaveStyleRule("border", "1px solid #2d74ff");
});

it("must validate if the transparent variant is being applied", () => {
    const tree = renderer.create(<Button variant="transparent" />).toJSON();
    expect(tree).toHaveStyleRule("background", "transparent");
    expect(tree).toHaveStyleRule("color", "#2d74ff");
});
