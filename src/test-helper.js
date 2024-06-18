import { test as base } from 'vitest';
import { Client } from "pg";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { createCustomerTable } from "./schema";
import {Mutex, Semaphore, withTimeout} from 'async-mutex';

const mutex = new Mutex();

let postgresContainer = null;
let postgresClient = null;

async function setupDB() {
  return await mutex.runExclusive(async () => {
    if (!postgresContainer) {
      console.log("Starting PostgreSQL container in: ", process.pid);
      postgresContainer = new PostgreSqlContainer().withReuse(true);
      postgresContainer = await postgresContainer.start();
      console.log("postgresContainer.getId() is", postgresContainer.getId());
      postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
      await postgresClient.connect();
      await createCustomerTable(postgresClient);
    }
    
    return { container: postgresContainer, client: postgresClient };
  });
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