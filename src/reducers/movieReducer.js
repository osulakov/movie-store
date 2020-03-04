const initialStateMovies = {
    movies: [],
    movie: {}
}

const movieReducer = (state=initialStateMovies, action={}) => {
    switch(action.type) {
        case 'GET_ALL_MOVIES':
            return Object.assign({}, state, { movies: action.payload })
        case 'GET_ONE_MOVIE':
            return Object.assign({}, state, { movie: action.payload })
        default:
            return state;
    }
}

export default movieReducer;