import { render, screen } from "@testing-library/react"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { AppContext } from "../../App"
import ProtecedRoute from "."
import { CONSTANTS } from "../../constants/constants"
import NowShowing from "../../pages/nowShowing"

describe('protected route', () => { 
    test('renders correctly', () => {
        render(
            <AppContext.Provider value={{ currentUserDetails: { isLoggedIn: true }}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProtecedRoute />}>
                            <Route index element={<NowShowing/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        )    
        expect(screen.getByText(CONSTANTS.HEADER.NOW_SHOWING)).toBeInTheDocument();
    })
    test('renders correctly', () => {
        render(
            <AppContext.Provider value={{ currentUserDetails: { isLoggedIn: false }}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProtecedRoute />}>
                            <Route index element={<NowShowing/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        )    
        expect(screen.queryByText(CONSTANTS.HEADER.NOW_SHOWING)).not.toBeInTheDocument();
    })
})