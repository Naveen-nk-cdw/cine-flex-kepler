import { act } from "react-dom/test-utils";
import ShortTeaserVideo from "."
import { fireEvent, render, screen, waitFor } from "../../pages/home/homeTest.utils"
import user from "@testing-library/user-event";

user.setup();
const onPlay = jest.fn();
const onPause = jest.fn();
describe('short teaser video', () => {
    test('renders correctly', () => {
        render(
            <ShortTeaserVideo 
            src="test-video.mp4"
            width="100%"
            heading="Test Video"
            />
        )
        expect(screen.getByText('Test Video')).toBeInTheDocument();
        expect(screen.getByAltText('ad')).toBeInTheDocument();
    })
    test('handles play and pause',async()=>{
        Object.defineProperty(global.HTMLMediaElement.prototype, 'play', {
            writable: true,
            value: jest.fn(() => Promise.resolve()),
        });
        render(
            <ShortTeaserVideo 
            src="test-video.mp4"
            width="100%"
            heading="Test Video"
            onPause={onPause}
            onPlay={onPlay}
            isAdDisplayed={false}
            />
        )
        await act(async()=>{
            await user.click(screen.getByTestId('playIcon'));
        })
        expect(onPlay).toHaveBeenCalled();
        await act(async()=>{
            fireEvent.pause(screen.getByTestId('videoPlayer'));
        })
        expect(onPause).toHaveBeenCalled();
    })
})