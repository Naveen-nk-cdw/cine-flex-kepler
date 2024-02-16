import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import AllMovies from './pages/allMovies';
import { createContext, useEffect, useState } from 'react';
import NowShowing from './pages/nowShowing';
import { CONSTANTS } from './constants/constants';
import Login from './pages/login';
import ProtecedRoute from './components/protectedRoute';
import { addCustomLike } from './utils/LikeHelper';
import { fetchMovies } from './services/fetchService';
//creating context fr the application
export const AppContext = createContext(null);
export const AllMoviescontext = createContext(null);

function App() {
  //state for app context
  const [currentUserDetails,setCurrentUserDetails] = useState(
    {
      userName : "Naveen",
      isLoggedIn : true
    }
  );
  //state for maintaining the moviesdata
  const[moviesData, setMoviesData] =  useState({data : null, selectedMovie: "1"});
  //state for loaders
  const[allMoviesLoader, setAllMoviesLoader] = useState(true);
  //fetches initial data for movies
  const loadInitialData = async() =>{
    const data = await fetchMovies();
    setMoviesData({
      ...moviesData,
      data : addCustomLike(data)
    })
    setAllMoviesLoader(!allMoviesLoader);
  }
  //useEffect triggers fetching the initial data
  useEffect(()=>{
    loadInitialData()
  },[])
  
  return (
    <AppContext.Provider value = {{currentUserDetails,setCurrentUserDetails}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
                <Route path={CONSTANTS.HEADER.ALL_MOVIES_ROUTE} element={
                <AllMoviescontext.Provider value = {{ moviesData, setMoviesData}}>
                  {allMoviesLoader ? 'loader' :<AllMovies/>}
                </AllMoviescontext.Provider>
                }/>
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
