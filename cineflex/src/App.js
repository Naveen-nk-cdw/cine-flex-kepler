import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import AllMovies from './pages/allMovies';
import { createContext, useState } from 'react';
import NowShowing from './pages/nowShowing';
import { CONSTANTS } from './constants/constants';
import Login from './pages/login';
import ProtecedRoute from './components/protectedRoute';

export const AppContext = createContext(null);

function App() {
  const [currentUserDetails,setCurrentUserDetails] = useState(
    {
      userName : "Naveen",
      isLoggedIn : false
    }
  );

  return (
    <AppContext.Provider value = {{currentUserDetails,setCurrentUserDetails}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path={CONSTANTS.HEADER.ALL_MOVIES_ROUTE} element={<AllMovies/>}/>
              <Route path={CONSTANTS.HEADER.LOGIN_ROUTE} element={<Login/>}/>
              <Route element={<ProtecedRoute/>}>
                <Route path={CONSTANTS.HEADER.NOW_SHOWING_ROUTE} element={<NowShowing/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
