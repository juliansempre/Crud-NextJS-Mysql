import React from 'react'


export default function ProductList({ data }) {
    return (
        <div className='my-5'>
            <h2 className="text-white py-3">the list</h2>
            <div className="row">
                {data.map(product => (<div className='col-4' key={product.id}>
                    <div className='card p-3'>
                        <h2 className='text-dark'>Name: {product.name}</h2>
                        <h3 className='text-dark'>Category: {product.category}</h3>
                        <h3 className='text-success fw-bold'>${product.price}</h3>
                    </div>
                </div>))}
            </div>



        </div>
    )
}



