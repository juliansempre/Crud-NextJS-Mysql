// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "../model/db";

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getProducts(req, res);
    case 'POST':
      return await saveProducts(req, res);
    case 'PUT':
      return await updateProduct(req, res);
    case 'DELETE':
      return await deleteProduct(req, res);
  }
}

const getProducts = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM products');
  console.log(result);
  return res.status(200).json(result);
}

const saveProducts = async (req, res) => {
  const { name, category, price } = req.body;
  const result = await pool.query('INSERT INTO products SET ?', {
    name: name,
    category: category,
    price: price
  });
  console.log(result);
  return res.status(200).json(result);
}

const updateProduct = async (req, res) => {
  const { id, name, category, price } = req.body;
  const result = await pool.query(
    'UPDATE products SET name = ?, category = ?, price = ? WHERE id = ?',
    [name, category, price, id]
  );
  console.log(result);
  return res.status(200).json(result);
}

const deleteProduct = async (req, res) => {
  const productId = req.query.id;
  const result = await pool.query('DELETE FROM products WHERE id = ?', [productId]);
  console.log(result);
  return res.status(200).json(result);
}