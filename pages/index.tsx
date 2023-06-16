import React from 'react';
import { InserirForm } from "./frontend/components/Inserir";
import { ProductForm } from "./frontend/components/Atualizar";
import { DeleteForm } from "./frontend/components/Deletar";
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './frontend/components/Listar';
import axios from 'axios';

export default function Home({ products }) {
  return (
    <div className='bg-dark vh-100'>
      <div className="container">
        <InserirForm />
        <ProductForm />
        <DeleteForm />
        <ProductList data={products} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data: products } = await axios.get('http://localhost:3000/api/controller/products');
  return {
    props: {
      products,
    },
  };
}
