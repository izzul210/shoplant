import React from 'react';
import './OurPlants.scss';
import ProductCard from '../ProductCard/ProductCard';

//Bootstrap
import Container from 'react-bootstrap/Container';

function OurPlants({products, handleAddToCart}) {
    const productList = [];

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
