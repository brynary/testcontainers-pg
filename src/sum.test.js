import { it, expect } from 'vitest';
import { test } from "./test-helper";
import { sum } from "./sum";

test('should work', ({}) => {
    // console.log("task", task);
    expect(true).toBe(true);
})

// test("1", async (ctx) => {
//     console.log("ctx", ctx);
//     expect(sum(1, 0)).toBe(1);
// });

test("2", async ({ }) => {
    expect(sum(1, 1)).toBe(2);
});

test("3", async ({ }) => {
    expect(sum(1, 2)).toBe(3);
});