import React, {useState} from 'react';
import './OurPlants.scss';
import ProductCard from '../ProductCard/ProductCard';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

function OurPlants({products, handleAddToCart, fetchProducts, fetchProductCategory}) {
    const productList = [];
    const [productCategory, setProductCategory ] = useState('all');

    const updateProducts = (category) => {
        if(category==='all'){
            fetchProducts();
        } else{
            fetchProductCategory(category);
        }

        setProductCategory(category);
    }

    if(products.length === 0){
        productList.push(
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Spinner animation="border" role="status" >
                     <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                    
        )
                
                    
    } else {
        products.map((product) => {
            productList.push(
                <ProductCard 
                             key={product.id}
                             productId={product.id}
                             productName={product.name}
                             productImage={product.assets[0].url}
                             productPrice={product.price.formatted_with_symbol}
                             productDescription={product.description}
                             onAddToCart={handleAddToCart} />
            )
            return null
        })
    }

    const active = (category) => {
        if(category===productCategory) return 'active'
    }

    return (
        <div className="homepage" id="ourProducts" >
            <Container>
                <h2>Our Plants</h2>
                <div className="tag">
                    <button onClick={() => updateProducts('all')} className={`${active('all')}`}>All</button>
                    <button onClick={() => updateProducts('indoor-plant')} className={`${active('indoor-plant')}`}>Indoor</button>
                    <button onClick={() => updateProducts('cactus')} className={`${active('cactus')}`}>Cactus</button>
                    <button onClick={() => updateProducts('pokemon')} className={`${active('pokemon')}`}>Pokémon</button>
                </div>
                <div className="allProducts">
                    {productList}
                </div>
            </Container>
        </div>
    )
}

export default OurPlants;
