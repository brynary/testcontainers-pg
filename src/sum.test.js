import { expect } from 'vitest';
import { test } from "./test-helper";
import { sum } from "./sum";

test("sum", async () => {
    expect(sum(1, 2)).toBe(3);
});