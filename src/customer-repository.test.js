import { expect } from 'vitest';
import { createCustomer, getCustomer } from "./customer-repository";
import { test } from "./test-helper";

test("should create and return multiple customers", async ({ pg }) => {
    const customer1 = { id: Math.ceil(Math.random() * 10000), name: "John Doe" };
    const customer2 = { id: Math.ceil(Math.random() * 10000), name: "Jane Doe" };

    await createCustomer(pg, customer1);
    await createCustomer(pg, customer2);

    const customers = [
        await getCustomer(pg, customer1.id),
        await getCustomer(pg, customer2.id)
    ];
    expect(customers).toEqual([customer1, customer2]);
});