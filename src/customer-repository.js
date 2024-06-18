export async function createCustomer(client, customer) {
  const sql = "INSERT INTO customers (id, name) VALUES($1, $2)";
  await client.query(sql, [customer.id, customer.name]);
}

export async function getCustomer(client, id) {
  const sql = "SELECT * FROM customers WHERE id = $1";
  const result = await client.query(sql, [id]);
  return result.rows[0];
}