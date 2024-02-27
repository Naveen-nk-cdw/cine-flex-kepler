import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
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
import NotFound from './components/notFound';
//creating context fr the application
export const AppContext = createContext(null);
export const AllMoviescontext = createContext(null);

function App() {
    //storing user details in local
    const loadUserDetails = () => {
        // Retrieve user details from localStorage on initial load
        const storedUserDetails = localStorage.getItem('currentUserDetails');
        return storedUserDetails ? JSON.parse(storedUserDetails) : {
            userName: 'Naveen',
            isLoggedIn: false,
        };
    }
    //state for app context
    const [currentUserDetails, setCurrentUserDetails] = useState(loadUserDetails());
    //state for maintaining the moviesdata
    const [moviesData, setMoviesData] = useState({ data: null, selectedMovie: '1' });
    //state for loaders
    const [allMoviesLoader, setAllMoviesLoader] = useState(true);
    //fetches initial data for movies
    const loadInitialData = async () => {
        const data = await fetchMovies();
        setMoviesData({
            ...moviesData,
            data: addCustomLike(data),
        });
        setAllMoviesLoader(!allMoviesLoader);
    };
    //useEffect triggers fetching the initial data
    useEffect(() => {
        loadInitialData();
    }, []);
    // Save user details to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('currentUserDetails', JSON.stringify(currentUserDetails));
    }, [currentUserDetails]);

    return (
        <AppContext.Provider value={{ currentUserDetails, setCurrentUserDetails }}>
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route
                                path={CONSTANTS.HEADER.ALL_MOVIES_ROUTE}
                                element={
                                    <AllMoviescontext.Provider
                                        value={{ moviesData, setMoviesData }}
                                    >
                                        {allMoviesLoader ? 'loader' : <AllMovies />}
                                    </AllMoviescontext.Provider>
                                }
                            />
                            <Route path={CONSTANTS.HEADER.LOGIN_ROUTE} element={<Login />} />
                            <Route element={<ProtecedRoute />}>
                                <Route
                                    path={CONSTANTS.HEADER.NOW_SHOWING_ROUTE}
                                    element={<NowShowing />}
                                />
                            </Route>
                            <Route path="*" element={<NotFound/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AppContext.Provider>
    );
}

export default App;
