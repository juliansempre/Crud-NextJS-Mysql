import axios from 'axios';
import { useState } from 'react';

export function DeleteForm() {
  const [productId, setProductId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`/api/controller/products?id=${productId}`);

      console.log(res);

      if (res.status === 200) {
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

  const handleChange = ({ target: { value } }) => {
    setProductId(value);
  };

  return (
    <div className='container py-5'>
      <form onSubmit={handleSubmit} className='d-flex flex-column w-25 m-auto gap-2 w-100'>
        <label>Excluir Produto:</label>
        <label htmlFor='productId' className='text-white'>
          Código do Produto:
        </label>
        <input
          type='number'
          className='bg-secondary text-light border-none p-2 w-30'
          onChange={handleChange}
          name='productId'
          value={productId}
          required
        />

        <button type='submit' className='btn btn-danger'>Excluir</button>
      </form>
    </div>
  );
}
