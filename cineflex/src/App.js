import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import AllMovies from './pages/allMovies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/all-movies' element={<AllMovies/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
