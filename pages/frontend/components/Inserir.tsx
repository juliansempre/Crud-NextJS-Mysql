import axios from 'axios';
import { useState } from 'react';


export function InserirForm() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('/api/controller/products', {
      name: product.name,
      category: product.category,
      price: product.price
    });

    console.log(res);

    if (res) {
      alert('Produto inserido com sucesso!');
      window.location.reload();
    } else {
      alert('Ocorreu um erro ao inserir o produto!');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className='container py-5'>
      <form onSubmit={handleSubmit} className='d-flex flex-column w-25 m-auto gap-2 w-100'>
        <label className='text-white h3'>Inserir Produto:</label>
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

        <button className='btn btn-primary'>Inserir</button>
      </form>
    </div>
  );
}
