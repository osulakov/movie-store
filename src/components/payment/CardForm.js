import React, { Component } from 'react';

class CardForm extends Component {
    state = {
        nameOnCard: '',
        cardNumber: '',
        expDate: '',
        cardCVC: '',
        ZIP: ''
    }

    changeNameOnCard = (e) => {
        this.setState({
            nameOnCard: e.target.value
        })
    }

    changeCardNumber = (e) => {
        this.setState({
            cardNumber: e.target.value
        })
    }

    changeExpDate = (e) => {
        this.setState({
            expDate: e.target.value
        })
    }

    changeCardCVC = (e) => {
        this.setState({
            cardCVC: e.target.value
        })
    }

    changeZIP = (e) => {
        this.setState({
            ZIP: e.target.value
        })
    }

    handleToConfirmPayment = () => {
        if(this.state.nameOnCard === '' || this.state.cardNumber === '') {
            alert('Enter your card data first.')
        } else {
            this.props.toConfirmPayment(this.state)
        }
        
    }

    render() {
        return (
            <div style={{width: "500px", margin: "auto"}}>
                <form>
                   <input id="name-on-card" type="text" placeholder="Name on card" onChange={this.changeNameOnCard}/>
                   <input id="card-number" type="number" placeholder="Card number" onChange={this.changeCardNumber}/>
                   <input id="exp-date" type="date" placeholder="MM / YY" onChange={this.changeExpDate}/>
                   <input id="cvc" type="number" placeholder="CVC" onChange={this.changeCardCVC}/>
                   <input id="zip" type="number" placeholder="ZIP" onChange={this.changeZIP}/>
                   <a class="waves-effect red btn" onClick={this.handleToConfirmPayment}>Continue payment</a>
               </form>
            </div>
        )
    }
}

export default CardForm;
