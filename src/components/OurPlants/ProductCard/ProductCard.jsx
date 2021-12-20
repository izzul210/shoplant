import React from 'react';
import './ProductCard.scss';

//Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard(props) {
    const {productId,
           productName,
           productImage,
           productPrice,
           onAddToCart} = props;

    return (
        <div className="productCard"> 
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={productImage} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        {productPrice}
                    </Card.Text>
                    <Button onClick={() => onAddToCart(productId, 1)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
