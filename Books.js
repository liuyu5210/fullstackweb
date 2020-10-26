import client from "./db.js";

class Book{
  findAll(){
  return client.execute("SELECT *  FROM books ORDER BY id LIMIT 10");
}

creat({id,name}){
  return client.excute(
  `INSERT INTO books(id,name) VALUES(${id},${name})`
  )
  }
}

const bookModel=new Book();

export const BookAll=async()=> {
  return await bookModel.findAll();
}
export const BookSel = async (id) => {
  console.info("@@Query id: ", id)
  console.log(`SELECT * FROM books WHERE id = ${id} ORDER BY id LIMIT 10`);
  return await client.execute(`SELECT * FROM books WHERE id = ${id} ORDER BY id LIMIT 10`);
}
