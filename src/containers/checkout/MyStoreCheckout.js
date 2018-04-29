import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Elements} from 'react-stripe-elements';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import InjectedCheckoutForm from './CheckoutForm';
import ErrorMessages from '../../components/ErrorMessages';
import { getStripeConfig, subscribe } from '../../actions';
import '../styles/billing.css';

class MyStoreCheckout extends Component {

    componentWillReceiveProps(newProps) {
        if (newProps.subscribeSuccess) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    componentDidMount() {
        this.props.getStripeConfig();
    }

    subscribe = (token, plan) => {

        this.props.subscribe(token, this.props.user.email, plan);
    }

    render() {
        return (
            <div className="billing-page container">
                <div className="row">

                    <div className="col-xs-12 col-md-6">       
                        <Elements>
                            <InjectedCheckoutForm config={this.props.stripeConfig} subscribe={this.subscribe}/>
                        </Elements>

                        <ErrorMessages errors={this.props.errors} />
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <div className="payment-form text-center">
                            <h3 className="card-title">FREE Subscription</h3>
                            <Link to={routes.DASHBOARD_PATH}>
                                <button className="btn btn-secondary">Continue as Free User</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    errors: state.errors, 
    subscribeSuccess: state.subscribeSuccess,
    stripeConfig: state.stripeConfig
});

const mapDispatchToProps = (dispatch) => ({
    getStripeConfig: () => dispatch(getStripeConfig()),
    subscribe: (token, email, plan) => dispatch(subscribe(token, email, plan))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyStoreCheckout);
