import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SERVER_LOCAL_HOST_URL } from '../../constants';

const CurrentMovie = (props) => {
    let imageUrl = SERVER_LOCAL_HOST_URL + props.movie.imageUrl
    return (
        <div style={{width: "500px", margin: "auto"}}>
            <img src= {imageUrl} style={{width: "150px", float:"left"}}/>
            <div style={{backgroundColor:"#E1E8ED", float:"right", width: "300px"}}>
                <p><b>{ props.movie.name }</b></p>
                <p>{ props.movie.description }</p>
                <p><b>Price:</b>{props.movie.price}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieReducer.movie
    }
}

export default connect(mapStateToProps)(CurrentMovie);

CurrentMovie.propTypes = {
    movie: PropTypes.object
}