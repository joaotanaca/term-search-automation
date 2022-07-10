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
