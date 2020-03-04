const initialStateTicket = {
    tickets: []
}

const ticketReducer = (state=initialStateTicket, action={}) => {
    switch(action.type) {
        case 'GET_ALL_TICKETS':
            return Object.assign({}, state, { tickets: action.payload })
        default:
            return state;
    }
}

export default ticketReducer;