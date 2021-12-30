import React from 'react';
import './OurPlants.scss';
import ProductCard from './ProductCard/ProductCard';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

function OurPlants({products, handleAddToCart}) {
    const productList = [];

    if(products.length === 0){
        return <div className="homepage">
                <Container>
                    <h2>Our Plants</h2>
                    <Spinner animation="border" role="status" style={{marginTop: '5rem'}}>
                     <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
              </div>
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
        <div className="homepage" id="ourProducts" >
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
