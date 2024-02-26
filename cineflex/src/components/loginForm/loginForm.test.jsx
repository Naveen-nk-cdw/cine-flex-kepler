import { BrowserRouter, Routes } from "react-router-dom";
import LoginForm from "."
import { act, render, screen, setCurrentUserDetails, waitFor } from "../../pages/home/homeTest.utils"
import { CONSTANTS } from "../../constants/constants";
import user from "@testing-library/user-event";


// const setCurrentUserDetails = jest.fn();
describe('loginForm', () => {
    test('render', () => {
        render(
            <BrowserRouter>
                <LoginForm/>
            </BrowserRouter>
        );
        expect(screen.queryByText(CONSTANTS.LOGIN_FORM.LOGIN_HEADING,{ selector: '.heading' })).toBeInTheDocument();
        expect(screen.getByText(CONSTANTS.LOGIN_FORM.LOGIN_DESCRIPTION)).toBeInTheDocument();
        expect(screen.getByLabelText(CONSTANTS.LOGIN_FORM.EMAIL_LABEL)).toBeInTheDocument();
        expect(screen.getByLabelText(CONSTANTS.LOGIN_FORM.PASSWORD_LABEL)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: CONSTANTS.LOGIN_FORM.SUBMIT_LABEL })).toBeInTheDocument();
    })
    test('form works correctly', async () => {
        render(
            <BrowserRouter>
                <LoginForm />
            </BrowserRouter>
        );

        const emailInput = screen.getByLabelText(CONSTANTS.LOGIN_FORM.EMAIL_LABEL);
        await act(async()=>{
            await user.type(emailInput, 'test@nanthan.com');
        })

        const passwordInput = screen.getByLabelText(CONSTANTS.LOGIN_FORM.PASSWORD_LABEL);
        await act(async()=>{
            await user.type(passwordInput, 'test@nanthan.com');
        })

        const loginButton = screen.getByRole('button', { name: CONSTANTS.LOGIN_FORM.SUBMIT_LABEL });
        await act(async()=>{
            await user.click(loginButton);
        })

        await waitFor(() => {
            expect(setCurrentUserDetails).toHaveBeenCalledWith({
                userName: 'test@nanthan.com',
                isLoggedIn: true,
            });
        });
    });
})