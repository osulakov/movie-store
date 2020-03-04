import axios from 'axios';

export const getAllMovies = () => (dispatch) => {
    axios.get('http://localhost:8080/api/movie/')
        .then(response => {
            const data  = response.data.movies;
            dispatch({type: "GET_ALL_MOVIES", payload: data})
        })
        .catch(err => console.log(err))
    
}

export const getOneMovie = (id) => (dispatch) => {
    let data = {
        _id: id
    }
    axios.post('http://localhost:8080/api/movie/', data)
        .then(response => {
            const data  = response.data.movie;
            dispatch({type: "GET_ONE_MOVIE", payload: data})
            console.log('actions get one word', data)
        })
        .catch(err => console.log(err))
}