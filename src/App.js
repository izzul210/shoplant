import './App.css';
import React, { useState, useEffect } from 'react';
//Components
import TopPage from './components/TopPage/TopPage';
import OurPlants from './components/OurPlants/OurPlants';
import Cart from './components/Cart/Cart';
import TopBar from './components/TopPage/TopBar';
import Checkout from './components/CheckoutForm/Checkout/Checkout';

//Commerce.js
import { commerce } from './lib/commerce';

//React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
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


  //Update item quantity at cart
  const handleUpdateCartQty = async(productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity});
    setCart(cart);
  }

  //Remove item from cart
  const handleRemoveFromCart = async(productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  //Emty cart
  const handleEmptyCart = async() => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
      fetchProducts();
      fetchCart();
  },[]);


  return (
    <Router>
      <div className="App">
        <TopBar cartItem={cart.total_items} />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <TopPage />
              <OurPlants products={products} handleAddToCart={handleAddToCart} />
            </React.Fragment>
          } />
          <Route exact path="/cart" element={<Cart cart={cart} 
                                                   handleUpdateCartQty={handleUpdateCartQty}
                                                   handleRemoveFromCart={handleRemoveFromCart}
                                                   handleEmptyCart={handleEmptyCart} />} />
          <Route exact path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
