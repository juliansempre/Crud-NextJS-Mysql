import axios from 'axios';
import { useState } from 'react';

//Frontend Inserir produtos aqui

export function Productform() {

    const [product, setproduct] = useState({
        
        name: '',
        category: '',
        price: ''

    })

    const handlerSubmit = async (e) => {

        e.preventDefault();

        const res = await axios.post('/api/controller/products', {
            name: product.name,
            category: product.category,
            price: product.price,
        })
        console.log(res);
        //se deu certo ou não ao inserir
        if(res){
            alert("Usuario inserido com sucesso!")
            window.location.reload();
        }else{
            alert("Ocorreu um erro ao inserir!")
        }
        

    };

    const handlerChange = ({target: {name, value}}) => {
        
        setproduct({... product, [name]: value});
       
    }


    return (
        <div className='container py-5'>
         
            <form onSubmit={handlerSubmit} className="d-flex flex-column w-25 m-auto gap-2">
            <label>Inserir Produto:</label>
                <label htmlFor="name" className='text-white'>Name:</label>
                <input type="text" className='bg-secondary text-light border-none p-2' onChange={handlerChange} name='name'  />

                <label htmlFor="category" className='text-white'>Category</label>
                <input type="text" className='bg-secondary text-light border-none p-2' name='category' onChange={handlerChange} />

                <label htmlFor="price" className='text-white'>Price</label>
                <input type="number" className='bg-secondary text-light border-none p-2' onChange={handlerChange} name='price' />

                <button className='btn btn-primary'>Send</button>
            </form>

        </div>
    )

}
