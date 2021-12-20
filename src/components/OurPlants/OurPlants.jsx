import React, { useState, useEffect } from 'react';
import './OurPlants.scss';
import ProductCard from '../ProductCard/ProductCard';
import { commerce } from '../../lib/commerce';

//Bootstrap
import Container from 'react-bootstrap/Container';

function OurPlants() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const productList = [];

    //Fetch list of products sell
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    //Get list of products added in the cart
    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    //Add an item to the cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);

    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    console.log(cart);

    if(products === null){
        return <div>Loading...</div>
    } else {
        products.map((product) => {
            productList.push(
                <ProductCard productId={product.id}
                             productName={product.name}
                             productImage={product.assets[0].url}
                             productPrice={product.price.formatted_with_symbol}
                             onAddToCart={handleAddToCart} />
            )
            return null
        })
       

    }

    return (
        <div className="homepage">
            <Container>
                <h2>Our Plants</h2>
                <div className="allProducts">
                    {productList}
                </div>
            </Container>
        </div>
    )
}

export default OurPlants;
