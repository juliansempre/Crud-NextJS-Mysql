import React, { useState, useEffect } from 'react';
import { InserirForm } from "./frontend/components/Inserir";
import { ProductForm } from "./frontend/components/Atualizar";
import { DeleteForm } from "./frontend/components/Deletar";
import styled from "styled-components";
import ProductList from './frontend/components/Listar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Divisao = styled.div`
  display: flex !important;
  flex-direction: row !important;
  width: 100%;
  height: 100%;
`;

const Div1 = styled.div`
  flex: 1;
  background: #303030;
  display: ${({ displayInsertForm }) => displayInsertForm ? 'block' : 'none'} !important;
`;

const Div2 = styled.div`
  flex: 1;
  background: #303030;
  display: ${({ displayProductForm }) => displayProductForm ? 'block' : 'none'} !important;
`;

const Div3 = styled.div`
  flex: 1;
  background: #303030;
  display: ${({ displayDeleteForm }) => displayDeleteForm ? 'block' : 'none'} !important;
`;

const IndexPage = () => {
  const [products, setProducts] = useState([]);
  const [displayInsertForm, setDisplayInsertForm] = useState(false);
  const [displayProductForm, setDisplayProductForm] = useState(false);
  const [displayDeleteForm, setDisplayDeleteForm] = useState(false);

  const handleInserirClick = () => {
    setDisplayInsertForm(true);
    setDisplayProductForm(false);
    setDisplayDeleteForm(false);
  };

  const handleUpdateClick = () => {
    setDisplayInsertForm(false);
    setDisplayProductForm(true);
    setDisplayDeleteForm(false);
  };

  const handleDeleteClick = () => {
    setDisplayInsertForm(false);
    setDisplayProductForm(false);
    setDisplayDeleteForm(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleInserirClick();
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/controller/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <center>
        <button className='btn btn-primary float-right mr-1' onClick={handleInserirClick}>Inserir</button>
        <button className='btn btn-primary float-right mr-1' onClick={handleUpdateClick}>Atualizar</button>
        <button className='btn btn-primary float-right mr-1' onClick={handleDeleteClick}>Deletar</button>
      </center>

      <Divisao>
        <Div1 displayInsertForm={displayInsertForm}><InserirForm /></Div1>
        <Div2 displayProductForm={displayProductForm}><ProductForm /></Div2>
        <Div3 displayDeleteForm={displayDeleteForm}><DeleteForm /></Div3>
      </Divisao>

      <ProductList data={products} />
    </>
  );
};

export default IndexPage;
