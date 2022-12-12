import React from 'react';
import axios from 'axios';
import Link  from 'next/link';

function Products({products}){
    return(
        <div>
        <h1>Lista de Produtos</h1>
        {products.map((product) => (
            <div> 
                <Link href='/products/[id]' as={'/products/${product.id}'}>
                <div><p>{product.title}</p></div>
                <div><p>R$ {product.price}</p></div>
                <div><img width={200} src = {product.image}></img></div>
                <div><p>{product.description}</p></div>
                </Link>
            </div>
        ))}
    </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        ' https://fakestoreapi.com/products'
    );

    const data = await response.data

    return {
        props: {products:data},
    }
}

export default Products;
