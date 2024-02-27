import { act, render, screen, waitFor } from "@testing-library/react"
import Counter from "."
import { CONSTANTS } from "../../constants/constants"

jest.useFakeTimers();
describe('counter', () => {
    test('counter render', ()=>{
        const prefix = CONSTANTS.ADWRAPPER.START;
        render(<Counter prefix={prefix} initialSeconds={4}/>);
        const counterElement = screen.getByText(prefix+"00:04");
        expect(counterElement).toBeInTheDocument();
    })
    test('counting correctly',()=>{
        const prefix = CONSTANTS.ADWRAPPER.START;
        render(<Counter prefix={prefix} initialSeconds={4}/>);
        act(()=>{
            jest.advanceTimersByTime(1000);
        })  
        const counterElement = screen.getByText(prefix+"00:03");
        expect(counterElement).toBeInTheDocument();
    })
    test('call endfunction',async()=>{
        const prefix = CONSTANTS.ADWRAPPER.START;
        const mockFn = jest.fn();
        render(<Counter prefix={prefix} initialSeconds={1} onTimeEnd={mockFn}/>);
        act(()=>{
            jest.advanceTimersByTime(1000);
        }) 
        await waitFor(() => {
            const counterElement = screen.getByText(prefix + "00:00");
            expect(counterElement).toBeInTheDocument();
        });
        act(()=>{
            jest.advanceTimersByTime(1000);
        }) 
        await waitFor(() => {
            expect(mockFn).toHaveBeenCalled();
        });
    })
})
