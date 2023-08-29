import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView.jsx';
import { CartContextProvider } from './Context/CartContext.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

const cartContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
        
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting="Bienvenido" /> } />
            <Route path='/category/:category' element={ <ItemListContainer /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer/> } />
            <Route path='/cart' element={ <CartView/> } />
            <Route path='*' element={ <h1>ERROR 404: Page Not Found</h1> } />
          </Routes>
        </BrowserRouter>   
      </CartContextProvider>
    </div>
  );
}

export default App;
