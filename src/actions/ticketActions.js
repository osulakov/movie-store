import axios from 'axios';
import { SERVER_LOCAL_HOST_URL } from '../constants';

export const getAllTickets = () => (dispatch) => {
    console.log('getAllTickets actions')
    
    getTickets()
        .then(result => {
            dispatch({type: "GET_ALL_TICKETS", payload: result.data.tickets})
        })
    
}

function getTickets () {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;

    const body = {
        userId: userId
    }

    return axios({
        method: 'POST',
        url: `${SERVER_LOCAL_HOST_URL}api/ticket/`,
        headers: headers,
        data: body
    })
}