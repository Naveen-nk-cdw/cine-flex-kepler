const TRAILER_BASE_URL = "https://mocki.io/v1/b39c9ae6-2240-4dfa-8249-97d95f13fe95";
const TEASER_BASE_URL = "https://mocki.io/v1/cd6ef37c-2822-47dc-8a14-606d5edc9fa5";
export const fetchTrailers = async() => {
    try{
        const response = await fetch(TRAILER_BASE_URL);
        console.log(response.data);
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}
export const fetchMovies = async() =>{
    try{
        const response = await fetch(TEASER_BASE_URL);
        console.log(response.data);
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}