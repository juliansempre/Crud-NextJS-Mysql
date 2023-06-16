import React from 'react';
import axios from 'axios';

export default function ProductList({ data }) {
  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(`/api/controller/products?id=${productId}`);
      console.log(res);

      if (res) {
        alert('Produto excluído com sucesso!');
        window.location.reload();
      } else {
        alert('Ocorreu um erro ao excluir o produto!');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao excluir o produto!');
    }
  };

  return (
    <div className='my-5'>
      <h2 className="text-white py-3">Listar Produtos</h2>
      <div className="row">
        {data && data.map(product => (
          <div className='col-4' key={product.id}>
            <div className='card p-3'>
              <h4 className='text-dark'>Código do produto: {product.id}</h4>
              <h2 className='text-dark'>Nome: {product.name}</h2>
              <h3 className='text-dark'>Categoria: {product.category}</h3>
              <h3 className='text-success fw-bold'>R$ {product.price}</h3>
              <button
                className='btn btn-danger mt-2'
                onClick={() => handleDelete(product.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
