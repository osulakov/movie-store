import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { confirmPayment } from '../../actions/paymentActions';

class ConfirmPayment extends Component {

    handleConfirmPayment = () => {
        let data = this.props.movie;
        this.props.confirmPayment(data)
    }

    render() {
        let cardNumber = this.props.card.cardNumber;
        let cn = 'XXXX-XXXX-XXXX-'
        cardNumber =  cn.concat(cardNumber.slice(12))
        return (
            <div style={{width: "500px", margin: "auto"}}>
                <div class="row">
                    <div class="col s12">
                        <div class="card white">
                            <div class="card-content black-text">
                            <span class="card-title"><b>Payment confirmation</b></span>
                            <p>Name:&nbsp; {this.props.card.nameOnCard} </p>
                            <p>Card number:&nbsp; {cardNumber} </p>
                            <p>Movie:&nbsp; {this.props.movie.name} </p>
                            <p>Amount:&nbsp; <b>{this.props.movie.price}</b> </p>
                            </div>
                            <div class="card-action">
                            <Link to='/tickets'><p class="waves-effect red btn" onClick={this.handleConfirmPayment}>Cofirm payment</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

const MapStateToProps = (state, ownProps) => {
    return {
        card: ownProps.card,
        movie: state.movieReducer.movie,
        message: state.paymentReducer.ticket.message
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        confirmPayment: (data) => dispatch(confirmPayment(data))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ConfirmPayment);

ConfirmPayment.propTypes = {
    card: PropTypes.object,
    movie: PropTypes.object,
    message: PropTypes.string,
    confirmPayment: PropTypes.func
}
