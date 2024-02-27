import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import Button from ".";

describe('button', () => {
    test('button render', () => { 
        const customLabel = 'cutom label';
        render(<Button label={customLabel}/>);
        const buttonElement = screen.queryByText(customLabel);
        expect(buttonElement).toBeInTheDocument();
    })
    test('button click', async()=>{
        user.setup()
        const customLabel = 'cutom label';
        const mockFn = jest.fn();
        render(<Button label={customLabel} onClick={mockFn}/>);
        const buttonElement = screen.queryByText(customLabel);
        await user.click(buttonElement);
        expect(mockFn).toHaveBeenCalled();
    })
    test('button render', () => { 
        const customLabel = 'cutom label';
        render(<Button label={customLabel} disabled={true}/>);
        const buttonElement = screen.queryByText(customLabel);
        expect(buttonElement).toHaveClass('disabled');
    })
})