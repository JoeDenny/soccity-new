import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';
import '../styles/checkout-form.css';


class CheckoutForm extends React.Component {
    constructor() {
        super();

        this.state = {
            plan: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            plan: event.target.value
          });        
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {

            if(token) {
                this.props.subscribe(token, this.state.plan);
            }
    
        });
    }

  render() {
    return (
        <div className="">
            <form className="payment-form" onSubmit={this.handleSubmit}>
                <h3 className="card-title text-center">PREMIUM subscription</h3>   

                <h5>Plans</h5>
                <div className="radio">
                    <label>
                        <input type="radio" value="yearly" checked={this.state.plan === 'yearly'} onChange={this.handleChange}/>
                        <span> Yearly: £44.99</span>
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="half-yearly" checked={this.state.plan === 'half-yearly'} onChange={this.handleChange}/>
                        <span> Half-yearly: £24.99</span>
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="monthly" checked={this.state.plan === 'monthly'} onChange={this.handleChange}/>
                        <span> Monthly: £4.99</span>
                    </label>
                </div>

                <p className="instruction">Complete your payment details below</p>

                <section>
                    <h2>Payment Information</h2>
                    <div className="payment-info card visible">
                        <fieldset>
                            <label htmlFor="card-element">Credit or debit card</label>
                            <div id="card-element">
                                <CardElement style={{base: {fontSize: '18px'}}} />
                            </div>
                        </fieldset>
                    </div>
                </section>

                {/* <div className="form-row">
                    <label htmlFor="card-element">
                        Credit or debit card
                    </label>
                    <div id="card-element">
                        <CardElement style={{base: {fontSize: '18px'}}} />
                    </div>

                    <div className="payment-errors" id="card-errors" role="alert"></div>
                </div> */}

                <button>Confirm order</button>
            </form>
        </div>
    );
  }
}

export default injectStripe(CheckoutForm);