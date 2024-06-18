import { test as base } from 'vitest';
import { Client } from "pg";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { createCustomerTable } from "./schema";

let postgresContainer = null;
let postgresClient = null;

async function setupDB() {
  if (!postgresContainer) {
    postgresContainer = await new PostgreSqlContainer().start();
    postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
    await postgresClient.connect();
    await createCustomerTable(postgresClient);
  }
  
  return { container: postgresContainer, client: postgresClient };
}

async function teardownDB() {
  if (postgresContainer) {
    await postgresClient.end();
    await postgresContainer.stop();
    postgresClient = null;
    postgresContainer = null;
  }
}

export const test = base.extend({
  pg: async ({}, use) => {
    const { container, client } = await setupDB();
    await use(client)
    teardownDB();
  },
})