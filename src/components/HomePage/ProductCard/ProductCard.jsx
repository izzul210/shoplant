import React, {useState} from 'react';
import './ProductCard.scss';

//Bootstrap
import {Modal, CloseButton} from 'react-bootstrap';
import { RiContactsBookLine } from 'react-icons/ri';

function MyVerticallyCenteredModal(props) {
    const {productId,
        productName,
        productImage,
        productPrice,
        productDescription,
        onAddToCart} = props;

    const [quantity, setQuantity] = useState(1);



    const addToCart = () => {
        onAddToCart(productId, quantity);
        props.onHide();
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className="closeButton">
                <CloseButton onClick={props.onHide} />
            </div>
            <div className="image">
              <img src={productImage} alt=""></img>
            </div>
            <div className="description">
                <h1>{productName}</h1>
                <div dangerouslySetInnerHTML={{__html: productDescription}} />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="price">
                <h1>{productPrice}</h1>
            </div>
            <div className="buttons">
                <div className="qtyButton">    
                    <button onClick={() => setQuantity((prevQuantity) => prevQuantity > 1 ? prevQuantity-1 : prevQuantity)}><h3>-</h3></button>
                    <h5>{quantity}</h5>
                    <button onClick={() => setQuantity((prevQuantity) => prevQuantity+1)}><h3>+</h3></button>
            </div>
            <button className="addCart" onClick={addToCart}>Add To Cart</button>
            </div>
        </Modal.Footer>
      </Modal>
    );
  }


function ProductCard(props) {
    const {productId,
           productName,
           productImage,
           productPrice,
           productDescription,
           onAddToCart} = props;

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="productCard"> 
            <div className="image">
                <img src={productImage} 
                     alt=""
                     onClick={() => setModalShow(true)}></img>
            </div>
            <div className="context">
                <div className="description">
                    <h4 className="name">{productName}</h4>
                    <h4 className="price">{productPrice}</h4>
                </div>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                productId={productId}
                productName={productName}
                productImage={productImage}
                productPrice={productPrice}
                productDescription={productDescription}
                onAddToCart={onAddToCart}
                />
        </div>
    )
}

export default ProductCard
