import './App.css';
import Nav from './Components/Nav';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShopContext from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContext>
        <Router>
          <Nav />
          <Routes>
            {/* Redirect from root path to /shop */}
            <Route path="/" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContext>
    </div>
  );
}

export default App;
