import axios from 'axios';
import { SERVER_LOCAL_HOST_URL } from '../constants';

export const confirmPayment = (data) => (dispatch) => {
    console.log('confirm payment action', data)
    payment(data)
        .then(result => {
            let ticket  = result.data
            dispatch({type: "CONFIRM_PAYMENT", payload: ticket})
        })
}

function payment (data) {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;

    const body = {
        movieId: data._id,
        movieName: data.name,
        userId: userId,
        amount: data.price
    }

    return axios({
        method: 'POST',
        url: `${SERVER_LOCAL_HOST_URL}api/payment/`,
        headers: headers,
        data: body
    })
}