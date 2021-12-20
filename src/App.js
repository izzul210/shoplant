import './App.css';
import React, { useState, useEffect } from 'react';
//Components
import TopPage from './components/TopPage/TopPage';
import OurPlants from './components/OurPlants/OurPlants';

//Commerce.js
import { commerce } from './lib/commerce';

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

  useEffect(() => {
      fetchProducts();
      fetchCart();
  },[]);
  
  console.log(cart);

  return (
    <div className="App">
       <TopPage cartItem={cart.total_items}/>
       <OurPlants products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
