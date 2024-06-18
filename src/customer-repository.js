export async function createCustomer(client, customer) {
  const sql = "INSERT INTO customers (id, name) VALUES($1, $2)";
  await client.query(sql, [customer.id, customer.name]);
}

export async function getCustomers(client) {
  const sql = "SELECT * FROM customers";
  const result = await client.query(sql);
  return result.rows;
}