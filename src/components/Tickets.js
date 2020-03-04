import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from './tickets/Ticket';
import TicketsList from './tickets/TicketsList';

class Tickets extends Component {
    
    render() {
        let ticket = this.props.ticket;
        let message = this.props.message;

        if(ticket.movie){
            return (
                <div style={{width: "500px", margin: "auto"}}>
                    <Ticket/>
                    <TicketsList/>
                </div>
            )
            
        } else {
            return (
                <div style={{width: "500px", margin: "auto"}}>
                    <TicketsList/>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        ticket: state.paymentReducer.ticket
    }
}

export default connect(mapStateToProps)(Tickets);

Tickets.propTypes = {
    ticket: PropTypes.object
}

