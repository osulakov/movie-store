const initialStatePayment = {
    ticket: {}
}

const paymentReducer = (state=initialStatePayment, action={}) => {
    switch(action.type) {
        case 'CONFIRM_PAYMENT':
            return Object.assign({}, state, { ticket: action.payload })
        default:
            return state;
    }
}

export default paymentReducer;