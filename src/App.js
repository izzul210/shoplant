import './App.css';
import React from 'react';
import { DataProvider } from './context/DataContext';
//Components
import TopPage from './components/TopPage/TopPage';
import OurPlants from './components/HomePage/OurPlants/OurPlants';
import FeaturedPlants from './components/HomePage/FeaturedPlants/FeaturedPlants';
import Cart from './components/Cart/Cart';
import TopBar from './components/TopPage/TopBar';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import FootNote from './components/FootNote/FootNote';

//React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <TopBar />
          <Routes>
            <Route exact path="/" element={
              <React.Fragment>
                <TopPage />
                <FeaturedPlants />
                <OurPlants />
              </React.Fragment>
            } />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <FootNote />
        </DataProvider>
      </div>
    </Router>
    
  );
}

export default App;
