import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllTickets } from '../../actions/ticketActions';

class TicketsList extends Component {

    componentDidMount() {
        this.props.getAllTickets()
    }

    render() {
        
        let count = 0
        const ticketsList = this.props.tickets.map(ticket => {
            count++
            return (
                    <tr key={ticket._id}>
                        <td>{count}</td>
                        <td>{ ticket.movieName }</td>
                        <td>{ ticket.amount }</td>
                    </tr>
            )
        })
        return(
            <div>
                <p><b>All previous tickets</b></p>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Movie Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        { ticketsList }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketReducer.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTickets: () => dispatch(getAllTickets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);

TicketsList.propTypes = {
    tickets: PropTypes.array,
    getAllTickets: PropTypes.func
}