import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenido" /> } />
          <Route path='/category/:category' element={ <ItemListContainer /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
