import axios from 'axios';
import { useState } from 'react';

export function ProductForm() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put('/api/controller/products', {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price
    });

    console.log(res);

    if (res) {
      alert('Produto atualizado com sucesso!');
      window.location.reload();
    } else {
      alert('Ocorreu um erro ao atualizar o produto!');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className='container py-5'>
      <form onSubmit={handleSubmit} className='d-flex flex-column w-25 m-auto gap-2 w-100'>
        <label>Atualizar Produto:</label>
        <label htmlFor='id' className='text-white'>
          Digite o codigo do produto:
        </label>
        <input
          type='text'
          className='bg-secondary text-light border-none p-2 w-30'
          onChange={handleChange}
          name='id'
          required
        />

        <label htmlFor='name' className='text-white'>
          Nome:
        </label>
        <input
          type='text'
          className='bg-secondary text-light border-none p-2 w-100'
          onChange={handleChange}
          name='name'
          required
        />

        <label htmlFor='category' className='text-white'>
          Categoria:
        </label>
        <input
          type='text'
          className='bg-secondary text-light border-none p-2 w-100'
          name='category'
          onChange={handleChange}
          required
        />

        <label htmlFor='price' className='text-white'>
          Preço:
        </label>
        <input
          type='number'
          className='bg-secondary text-light border-none p-2 w-100'
          onChange={handleChange}
          name='price'
          required
        />

        <button className='btn btn-primary'>Atualizar</button>
      </form>
    </div>
  );
}
