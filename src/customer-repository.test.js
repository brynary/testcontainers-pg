import { expect } from 'vitest';
import { createCustomer, getCustomers } from "./customer-repository";
import { test } from "./test-helper";

test("should create and return multiple customers", async ({ pg }) => {
    const customer1 = { id: 1, name: "John Doe" };
    const customer2 = { id: 2, name: "Jane Doe" };

    await createCustomer(pg, customer1);
    await createCustomer(pg, customer2);

    const customers = await getCustomers(pg);
    expect(customers).toEqual([customer1, customer2]);
});