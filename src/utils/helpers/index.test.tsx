import { sleep } from "./sleep";

it("must validate if the sleep function is paralyzing for the requested time", async () => {
    const start = performance.now();
    await sleep(0.101);
    const end = performance.now() - start;

    expect(end).toBeGreaterThanOrEqual(100);
});
