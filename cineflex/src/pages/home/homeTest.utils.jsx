import {render} from "@testing-library/react"
import { AppContext } from "../../App";

const AllTheProviders = ({children}) => {
    return (
        <AppContext.Provider value={{ currentUserDetails, setCurrentUserDetails }}>
            {children}
        </AppContext.Provider>    
    )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from "@testing-library/react"
export const setCurrentUserDetails = jest.fn();
export const currentUserDetails = {
    userName: 'Naveen',
    isLoggedIn: true,
}
// override render method
export {customRender as render}