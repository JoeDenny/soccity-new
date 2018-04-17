import React, { Component } from 'react';
import './styles/pricing-guide.css';

class PricingGuide extends Component {
    render() {
        return (
            <section className="container">
                <div className="pricing-guide">
                    <h2 className="title text-center">Pricing</h2>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="card">
                                <h3 className="card-title text-center">FREE subscription</h3>
                                <ul className="text-secondary">
                                    <li><i className="ion-checkmark" /> Unlimited dashboards</li>
                                    <li><i className="ion-checkmark" /> 1250 miles*</li>
                                    <li><i className="ion-checkmark" /> Preset filters</li>
                                    <li><i className="ion-checkmark" /> Tiered Sources (incl. Twitter accounts)</li>
                                    <li><i className="ion-checkmark" /> 3 custom twitter accounts per dashboard</li>
                                    <li><i className="ion-checkmark" /> Up to 1 minute auto-refresh rate</li>
                                    <li><i className="ion-checkmark" /> 24-hour history </li>
                                    <li><i className="ion-checkmark" /> 20 bookmarks</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="card premium">
                                <header>
                                    <h3 className="card-title text-center">PREMIUM subscription</h3>
                                </header>
                                <ul>
                                    <li><i className="ion-checkmark" /> Unlimited miles</li>
                                    <li><i className="ion-checkmark" /> Custom keywords filters</li>
                                    <li><i className="ion-checkmark" /> Keyword notifications</li>
                                    <li><i className="ion-checkmark" /> Keyword highlight tool</li>
                                    <li><i className="ion-checkmark" /> 50 custom twitter accounts per dashboard</li>
                                    <li><i className="ion-checkmark" /> Up to 10 second auto-refresh rate</li>
                                    <li><i className="ion-checkmark" /> 7 day history</li>
                                    <li><i className="ion-checkmark" /> Unlimited bookmarks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="text-right text-secondary footnote">* 1 mile = 1 news card scrolled past.</p>
                </div>
            </section>
        )
    }
}

export default PricingGuide;