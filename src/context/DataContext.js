import { createContext, useState, useEffect} from 'react';
//Commerce.js
import { commerce } from '../lib/commerce';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    
    //Fetch all list of products sell
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    }
  
    //Fetch products based on categories
    const fetchProductCategory = async (category) => {
      const {data} = await commerce.products.list({
        category_slug: [category]});
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
  
    const refreshCart = async() => {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    }
  
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try{
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
          setOrder(incomingOrder);
          refreshCart();
      } catch (error){
          setErrorMessage(error.data.error.message);
      }
    }
  
    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    return(
        <DataContext.Provider value={{
            products,
            cart,
            order,
            errorMessage,
            fetchProducts,
            fetchProductCategory,
            handleAddToCart,
            handleUpdateCartQty,
            handleRemoveFromCart,
            handleEmptyCart,
            handleCaptureCheckout
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;