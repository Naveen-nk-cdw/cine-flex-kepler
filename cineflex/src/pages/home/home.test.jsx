import {render, screen} from "./homeTest.utils";
import Home from ".";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CONSTANTS } from "../../constants/constants";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

user.setup()
describe('home page', () => { 
    test('home banner', () => {
        const currentUserDetails = {
            userName: 'Naveen',
            isLoggedIn: true,
        }
        const setCurrentUserDetails = jest.fn();
        render(
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                    </Routes>
                </BrowserRouter>
        );
        const bannerImageElement = screen.queryByRole('img', { name: /sindel image/i });
        expect(bannerImageElement).toBeInTheDocument();
    })

    test('lottery section message',()=>{
        render(
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        );  
        const lotterySectionDescription = screen.getByText(new RegExp(`${CONSTANTS.NUMBER_LOTTERY.PARTICIPATE_PRIZE}`));
        expect(lotterySectionDescription).toBeInTheDocument();
    })

    test('lottery activity',async()=>{
        render(
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        );  
        const lotterySectionInput = screen.getByRole('textbox');
        expect(lotterySectionInput).toBeInTheDocument();
        //winning case
        await act(async()=>{
           await user.type(lotterySectionInput,'8888888888');
        })
        expect(lotterySectionInput).toHaveValue('8888888888')
        const submitButton = screen.queryByText(CONSTANTS.NUMBER_LOTTERY.SUBMIT_BUTTON_LABEL);
        expect(submitButton).toBeInTheDocument();
        await act(async()=>{
            await user.click(submitButton);
        })
        const winnerMessage = await screen.findByText(CONSTANTS.NUMBER_LOTTERY.WIN_PRIZE);
        expect(winnerMessage).toBeInTheDocument();
    })
    test('lottery activity failure',async()=>{
        render(
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        );  
        const lotterySectionInput = screen.getByRole('textbox');
        const submitButton = screen.queryByText(CONSTANTS.NUMBER_LOTTERY.SUBMIT_BUTTON_LABEL);
        await act(async()=>{
            await user.type(lotterySectionInput,'8888888889');
        })
        expect(lotterySectionInput).toHaveValue('8888888889')
        act(()=>{
            user.click(submitButton);
        })
        const loserMessage = await screen.findByText(CONSTANTS.NUMBER_LOTTERY.LOSE_PRIZE);
        expect(loserMessage).toBeInTheDocument();
    })

})