export async function loadSchema(client) {
  const sql = "CREATE TABLE IF NOT EXISTS customers (id INT NOT NULL, name VARCHAR NOT NULL, PRIMARY KEY (id))";
  await client.query(sql);
}