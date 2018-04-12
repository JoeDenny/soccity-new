import React, { Component } from 'react';
import './styles/pricing-guide.css';

class FeaturesGuide extends Component {
    render() {
        return (
            <section className="container">
                <div className="pricing-guide">
                    <h2 className="title text-center">Key Features</h2>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="card">
                                <h3 className="card-title text-center">FREE subscription</h3>
                                <ul className="text-secondary">
                                    <li><i className="ion-checkmark" /> Unlimited dashboards</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="card">
                                <h3 className="card-title text-center">PREMIUM subscription</h3>
                                <ul className="text-secondary">
                                    <li><i className="ion-checkmark" /> Unlimited miles</li>
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

export default FeaturesGuide;