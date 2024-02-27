
// import { render, screen } from "@testing-library/react";
import Header from "."
import { AppContext } from "../../App";
import { BrowserRouter } from "react-router-dom";
import { render, screen, currentUserDetails, setCurrentUserDetails } from "../../pages/home/homeTest.utils";
import { CONSTANTS } from "../../constants/constants";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


describe('header', () => {
    test('header rendering', () => {
        render(
            <BrowserRouter>
                <Header/> 
            </BrowserRouter>
        )
        expect(screen.queryByAltText('cine-flex-logo')).toBeInTheDocument();
        expect(screen.getByText(CONSTANTS.HEADER.HOME)).toBeInTheDocument();
        expect(screen.getByText(CONSTANTS.HEADER.ALL_MOVIES)).toBeInTheDocument();
        if (currentUserDetails.isLoggedIn) {
            expect(screen.getByText(CONSTANTS.HEADER.NOW_SHOWING)).toBeInTheDocument();
        }
        if (currentUserDetails.isLoggedIn) {
            expect(screen.getByText(`Hi ${currentUserDetails.userName}`)).toBeInTheDocument();
            expect(screen.getByText(CONSTANTS.HEADER.LOGOUT)).toBeInTheDocument();
        } else {
            expect(screen.getByText(CONSTANTS.HEADER.LOGIN)).toBeInTheDocument();
        }
    })
    test('logout works properly',async()=>{
        render(
            <BrowserRouter>
                <Header/> 
            </BrowserRouter>
        )
        user.setup();
        await act(async()=>{
            await user.click(screen.getByText(CONSTANTS.HEADER.LOGOUT));
        })

        expect(setCurrentUserDetails).toHaveBeenCalledWith({
            userName: '',
            isLoggedIn: false,
        });
    })
})