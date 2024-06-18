import { expect } from 'vitest';
import { test } from "./test-helper";
import { sum } from "../src/sum";

test("1", async () => {
    expect(sum(1, 0)).toBe(1);
});

test("2", async () => {
    expect(sum(1, 1)).toBe(2);
});

test("3", async () => {
    expect(sum(1, 2)).toBe(3);
});