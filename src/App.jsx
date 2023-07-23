import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenido" /> } />
          <Route path='/explore' element={ <ItemListContainer /> } />
          {/* <Route path='/item/:idItem' element={ <ItemDetailContainer/> } /> */}
        </Routes>
      </BrowserRouter>
      
      {/* <ItemListContainer greeting = "Bienvenido"/> */}
      
    </div>
  );
}

export default App;
