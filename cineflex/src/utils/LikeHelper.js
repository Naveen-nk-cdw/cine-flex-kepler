export const incrementLike = (id, moviesData) => {
    let likeUpdatedData = moviesData.map((data) => {
        if (!data.isLiked && data.id === id) {
            data.likes = parseInt(data.likes) + 1;
            data.isLiked = true;
        }
        return data;
    });
    return likeUpdatedData;
};

export const decrementLike = (id, moviesData) => {
    let likeUpdatedData = moviesData.map((data) => {
        if (data.isLiked && data.id === id) {
            data.likes = parseInt(data.likes) - 1;
            data.isLiked = false;
        }
        return data;
    });
    return likeUpdatedData;
};

export const getSelectedMovie = (id, moviesData) => {
    let selectedMovie = null;
    moviesData?.forEach((data) => {
        if (data.id === id) {
            selectedMovie = data;
        }
    });
    return selectedMovie;
};

export const addCustomLike = (moviesData) => {
    if (moviesData) {
        return moviesData?.map((data) => {
            return { ...data, isLiked: false };
        });
    }
};
