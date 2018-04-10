import React, { Component } from 'react';
import './styles/pricing-guide.css';

class PricingGuide extends Component {
    render() {
        return (
            <section className="container">
                <div className="pricing-guide">
                    <h2 className="text-center">Features & Pricing</h2>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="card">
                                <h4 className="text-center">FREE subscription</h4>
                                <ul>
                                    <li>Unlimited dashboards</li>
                                    <li>1250 miles*</li>
                                    <li>Preset filters</li>
                                    <li>Tiered Sources (incl. Twitter accounts)</li>
                                    <li>3 custom twitter accounts per dashboard</li>
                                    <li>Up to 1 minute auto-refresh rate</li>
                                    <li>24-hour history </li>
                                    <li>20 bookmarks</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="card">
                                <h4 className="text-center premium">PREMIUM subscription</h4>
                                <ul>
                                    <li>Unlimited miles</li>
                                    <li>Custom keywords filters</li>
                                    <li>Keyword notifications</li>
                                    <li>Keyword highlight tool</li>
                                    <li>50 custom twitter accounts per dashboard</li>
                                    <li>Up to 10 second auto-refresh rate</li>
                                    <li>7 day history</li>
                                    <li>Unlimited bookmarks</li>
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