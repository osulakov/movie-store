import React, { Component } from 'react';

import CurrentMovie from './payment/CurrentMovie';
import CardForm from './payment/CardForm';
import ConfirmPayment from './payment/ConfirmPayment';

class Payment extends Component {

    state = {
        card: {},
        toConfirmPaymentTrigger: false
    }

    toConfirmPayment = (card) => {
       this.setState({
            card: card,
            toConfirmPaymentTrigger: true
        })
    }

    render(){
        if(!this.state.toConfirmPaymentTrigger) {
            return(    
                <div >
                    <CurrentMovie />
                    <CardForm toConfirmPayment={this.toConfirmPayment} />
                </div>
            )
        } else {
            return(    
                <div >
                    <ConfirmPayment card={this.state.card}/>
                </div>
            )
        }
    }
}

export default Payment;

