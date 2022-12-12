import axios from 'axios';

function Products({product = {}}){
    return <div>
        <div><p>{product.title}</p></div>
        <div><p>R$ {product.price}</p></div>
        <div><img width={200} src = {product.image}></img></div>
        <div><p>{product.description}</p></div>
    </div>
}

export default Products;