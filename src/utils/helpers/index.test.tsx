import { generateMockArray } from "./generateMockArray";
import { removeHostname } from "./removeHostname";
import { sleep } from "./sleep";

const MOCK_RESULT = "MockResult";
const MOCK_URL = `http://localhost:8080/api/${MOCK_RESULT}`;

it("must validate if the sleep function is paralyzing for the requested time", async () => {
    const start = performance.now();
    await sleep(0.101);
    const end = performance.now() - start;

    expect(end).toBeGreaterThanOrEqual(100);
});

it("must validate if the removeHostname function is correctly removing all the hostname and leaving only the information in the last slash", async () => {
    const result = removeHostname(MOCK_URL);
    expect(result).toEqual(MOCK_RESULT);
});

it("must validate if the generateMockArray function is generating arrays of the proposed size", async () => {
    const result = generateMockArray(undefined, 100, 50);

    expect(result.length).toBeGreaterThan(50);
    expect(result.length).toBeLessThan(100);
});
