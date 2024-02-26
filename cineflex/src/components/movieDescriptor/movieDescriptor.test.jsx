import user from "@testing-library/user-event";
import { render, screen } from "../../pages/home/homeTest.utils";
import MovieDescriptor from ".";
import { AllMoviescontext } from "../../App";
import { act } from "react-dom/test-utils";

user.setup();
const moviesData = {
    data: [
      {
        movieId: '1',
        movieHeading: 'Movie 1',
        likesCount: 5,
        movieImgSrc: 'movie1.jpg',
        movieDescription: 'Description 1',
        actors: ['Actor 1', 'Actor 2'],
        isLiked: false,
      },
    ],
};
const triggerAd = jest.fn();
const resetAd = jest.fn();
const setMoviesData = jest.fn();
describe('movie decriptor', () => {
    test('movie descriptor rendered correctly', () => {
        render(
            <AllMoviescontext.Provider value={{moviesData,setMoviesData}}>
                <MovieDescriptor 
                movieHeading="Movie 1"
                likesCount={5}
                movieImgSrc="movie1.jpg"
                movieDescription="Description 1"
                actors={['Actor 1', 'Actor 2']}
                movieId="1"
                isLiked={false}
                isAdPlaying={false}
                resetAd={resetAd} 
                triggerAd={triggerAd}
                />
            </AllMoviescontext.Provider>
        )
        expect(screen.getByText('Movie 1')).toBeInTheDocument();
        expect(screen.getByText('5 Likes')).toBeInTheDocument();
        expect(screen.getByRole('img', {
            name: /movie poster/i
          })).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('Actor 1')).toBeInTheDocument();
        expect(screen.getByText('Actor 2')).toBeInTheDocument();
    })
    test('like handled successfully',async()=>{
        render(
            <AllMoviescontext.Provider value={{moviesData,setMoviesData}}>
                <MovieDescriptor 
                movieHeading="Movie 1"
                likesCount={5}
                movieImgSrc="movie1.jpg"
                movieDescription="Description 1"
                actors={['Actor 1', 'Actor 2']}
                movieId="1"
                isLiked={false}
                isAdPlaying={false}
                resetAd={resetAd} 
                triggerAd={triggerAd}
                />
            </AllMoviescontext.Provider>
        )
        await act(async()=>{
            await user.click(screen.getByTestId('like-icon'));
        })
        expect(setMoviesData).toHaveBeenCalledWith({
            data: [{ ...moviesData.data[0], likesCount: 6, isLiked: true }],
            ...moviesData,
          });
    })
})