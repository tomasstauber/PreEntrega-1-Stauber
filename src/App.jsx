import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {ItemListContainer} />
          <Route path='/categoria/:cat' element={ItemListContainer} />
          <Route path='/item/:id' element={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>
      <ItemDetailContainer />
    </>
  );
}

export default App;
