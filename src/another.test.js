import { expect } from 'vitest';
import { test } from "./test-helper";
import { sum } from "./sum";

test("1", async ({ pg }) => {
    expect(sum(1, 0)).toBe(1);
});

test("2", async ({ pg }) => {
    expect(sum(1, 1)).toBe(2);
});

test("3", async ({ pg }) => {
    expect(sum(1, 2)).toBe(3);
});

test("4", async ({ pg }) => {
    expect(sum(1, 3)).toBe(4);
});

test("5", async ({ pg }) => {
    expect(sum(1, 4)).toBe(5);
});
