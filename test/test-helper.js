import { test as base } from 'vitest';
import { Client } from "pg";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { loadSchema } from "../schema";

export const test = base.extend({
  pg: async ({}, use) => {
    const container = await new PostgreSqlContainer().withReuse(true).start();
    const client = new Client({ connectionString: container.getConnectionUri() });
    
    await client.connect();
    await loadSchema(client);

    await use(client)
  },
})