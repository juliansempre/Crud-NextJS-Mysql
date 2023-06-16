// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "../model/db"


export default async function handler(req, res) {


  switch (req.method) {

    case 'GET': return await getProducts(req, res);

    case 'POST': return await saveProducts(req, res);

  }

}


const getProducts = async (req, res) => {

  const [result] = await pool.query('SELECT * FROM products')
  console.log(result)
  return res.status(200).json(result);

}

const saveProducts = async (req, res) => {

  const { name, category, price } = req.body
  const result = await pool.query('INSERT INTO products SET ?', {
    name: name,
    category: category,
    price: price
  })
  console.log(result)
  return res.status(200).json(result);
  
}
