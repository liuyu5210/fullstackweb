import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "liuyu",
  poolSize: 3, // connection limit
  password: "LIUyu521",
});

console.log(client)
await client.execute("USE liuyu")
const res = await client.execute(`select * from books`);
console.log(res.rows);

export default client;
