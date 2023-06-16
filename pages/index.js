import React from 'react'
import { Productform } from '../components/Productform'
import 'bootstrap/dist/css/bootstrap.css'
import ProductList from '../components/ProductList'
import axios from 'axios'

export default function home({products}) {

  return (

    <div className='bg-dark vh-100'>

      <div className="container">

       

        <Productform />

        <ProductList data={products} />

      </div>


    </div>

  )
}



export const getServerSideProps = async (context) => {

  const {data: products} = await axios.get('http://localhost:3000/api/products')

  return{
    props:{
      products,
    },
  }

}