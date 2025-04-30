
import './App.css';
import Nav from './Components/Nav';
import { Link } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart' 

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ShopContext from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContext>
        
      <Router>

        <Nav/>
        <Routes>
        <Route path='/shopping-cart' element={<><Navigate to="/" replace /><Shop/></>}/>
          <Route path='/' element={<><Shop/></>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContext>
      
      
    </div>
  );
}

export default App;
