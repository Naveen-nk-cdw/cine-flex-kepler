import user from "@testing-library/user-event";
import MovieCard from ".";
import { AllMoviescontext } from "../../App";
import { render, screen } from "../home/homeTest.utils";
import { act } from "react-dom/test-utils";

const moviesData = {
    data: [
      {
        id: 1,
        movie: 'Movie 1',
        likes: 10,
        isLiked: false,
        link: 'movie1.jpg',
      },
    ],
    selectedMovie: null,
};
const setMoviesData = jest.fn();
user.setup();
describe('movieCard', () => {
    test('renders movie card with details', () => {
        render(
            <AllMoviescontext.Provider value={{moviesData,setMoviesData}}>
                <MovieCard
                imgSrc="movie1.jpg"
                movieName="Movie 1"
                likesCounts={10}
                movieId={1}
                isLiked={false}/>
            </AllMoviescontext.Provider>
        )
        expect(screen.getByText('Movie 1')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByAltText('movie')).toBeInTheDocument();
    })
    test('like icon click',async()=>{
        render(
            <AllMoviescontext.Provider value={{moviesData,setMoviesData}}>
                <MovieCard
                imgSrc="movie1.jpg"
                movieName="Movie 1"
                likesCounts={10}
                movieId={1}
                isLiked={false}/>
            </AllMoviescontext.Provider>
        )
        await act(async()=>{
            await user.click(screen.getByTestId('likeIcon'));
        })
        expect(setMoviesData).toHaveBeenCalledWith({
            data: [
              {
                id: 1,
                movie: 'Movie 1',
                likes: 11,
                isLiked: true,
                link: 'movie1.jpg',
              },
            ],
            selectedMovie: null,
          });
    })
})