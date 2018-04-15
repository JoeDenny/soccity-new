import React, { Component } from 'react';

class BillingPreferences extends Component {

    render() {
    
        return (
            <div className="billing-section">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <h3>Billing Preferences</h3>
                    </div>
                    <div className="col-xs-12 col-md-8">
                    
                        <div className="box">
                            <li className="filter-card text-secondary">
                                <p className="name">Current Plan</p>
                                <span className="pull-right">FREE subscription</span>
                            </li>
                            <li className="filter-card text-secondary">
                                <p className="name">Billing History</p>
                                <span className="pull-right"></span>
                            </li>
                            <li className="filter-card text-secondary">
                                <p className="name">Payment Details/Methods</p>
                                <span className="pull-right">Paypal</span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingPreferences;