import './App.css';
import Catalog from './Components/Catalog/Catalog';
import Page from "./Components/Page/Page"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <main className='App'>
        <Routes>
          <Route  path='/Catalog/*' element={<Catalog/>}/>
          <Route  path='*' element={<Page/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
