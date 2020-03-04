import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getAllMovies, getOneMovie } from '../actions/movieActions';

import { SERVER_LOCAL_HOST_URL } from '../constants';

class Movies extends Component {

    componentDidMount() {
        this.props.getAllMovies();
    }

    handleBuy = (id) => {
        this.props.getOneMovie(id)
    }

    handleTryToBuy = () => {
        alert('You need to login first if you want to buy the tichet on this movie.')
    }

    render() {
        let token = localStorage.getItem('token')
        let movies = this.props.movies;
        if(movies !== undefined) {
            var moviesList = movies.map((movie) => {
                let imageUrl = SERVER_LOCAL_HOST_URL + movie.imageUrl
                return (
                    <div key={movie._id} className="row">
                        <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img style={{maxHeight:"300px",maxWidth:"150px"}} src={ imageUrl }/>
                                <span className="card-title"> { movie.name } </span>
                            </div>
                            <div className="card-content">
                                <p>{ movie.description }</p>
                                <p><b>Produced by:</b> { movie.producer } </p>
                            </div>
                            <div className="card-action">
                                {token ? (
                                    <p onClick={() => {this.handleBuy(movie._id)}}><Link to={'/payment'}>Buy Ticket</Link></p>
                                ):(
                                    <p onClick={this.handleTryToBuy}><Link to={'/'}>Buy Ticket</Link></p>
                                )}
                                <p><b>Price:</b> { movie.price} </p>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })
            
        } 

        return (
            <div>
                { moviesList }
            </div>
        )
        
    }

}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovies: () =>   dispatch(getAllMovies()),
        getOneMovie: (id) =>   dispatch(getOneMovie(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

Movies.propTypes = {
    movies: PropTypes.array,
    getAllMovies: PropTypes.func,
    getOneMovie: PropTypes.func
}