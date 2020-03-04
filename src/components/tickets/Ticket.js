import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Ticket = (props) => {
    return (
        <div style={{width: "500px", margin: "auto"}}>
            <div class="row">
                <div class="col s12">
                    <div class="card white">
                        <div class="card-content black-text">
                        <span class="card-title"><b>Cinema ticket</b></span>
                        <p>Movie: <b>{ props.ticket.movie }</b></p>
                        <p>Amount: <b>{ props.ticket.amount }</b></p>
                        </div>
                        <div class="card-action">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        ticket: state.paymentReducer.ticket
    }
}

export default connect(MapStateToProps)(Ticket);

Ticket.propTypes = {
    ticket: PropTypes.object
}