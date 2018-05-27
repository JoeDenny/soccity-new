import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class BillingPreferences extends Component {

    render() {
        let config,
            premiumUser,
            subscription;

        if(this.props.stripeConfig) {     
            config = this.props.stripeConfig;

            if(config.user_subscription) {
                premiumUser = config.user_subscription.active;
                subscription = config.user_subscription.plan;
            }       
        }
    
        return (
            <div className="billing-section">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <h3>Billing Preferences</h3>
                    </div>
                    <div className="col-xs-12 col-md-8">
                    
                        <div className="box">
                            <li className="option text-secondary">
                                <p className="name">Current Plan</p>
                                <span style={{display: premiumUser ? 'none' : 'inline'}} className="pull-right">FREE subscription</span>
                                <span style={{display: premiumUser ? 'inline' : 'none'}} className="pull-right">PREMIUM subscription</span>
                            </li>
                            <li className="option text-secondary" style={{display: premiumUser ? 'inline' : 'none'}} >
                                <p className="name">Plan</p>
                                <span className="pull-right">{subscription}</span>
                            </li>

                            <li className="option text-secondary" style={{display: premiumUser ? 'none' : 'flex'}}>
                                <p className="name">Upgrade Subscription</p>
                                <span>
                                    <Link to={routes.BILLING_PATH}>
                                        <span className="upgrade">Upgrade Now</span>
                                    </Link>
                                </span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingPreferences;