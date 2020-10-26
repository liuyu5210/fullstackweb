                 
import client from "./db.js";

class Book{
findAll(){
return client.execute("SELECT name, author, price  FROM books ORDER BY id LIMIT 10");
}

creat({name,author,price}){
return client.excute(
`INSERT INTO books(name,author,price) VALUES(${name},${author},${price})`
)
}
}

export const BookSel = async() => {
console.info("@@Query id: ", id)
console.log(`SELECT name, author, price FROM books WHERE id = ${id} ORDER BY id LIMIT 10`);
return await client.execute(`SELECT name, author, price FROM books WHERE id = ${id} ORDER BY id LIMIT 10`);
}
