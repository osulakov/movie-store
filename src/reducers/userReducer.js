const initialStateUser = {
    userName: '',
    userId: '',
    email: ''
}

const userReducer = (state=initialStateUser, action={}) => {
    switch(action.type) {
        case 'USER_AUTH':
            return Object.assign({}, state, { 
                userName: action.payload.userName,
                userId: action.payload.userId,
                email: action.payload.email 
            })
        default:
            return state;
    }
}

export default userReducer;