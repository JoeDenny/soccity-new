import React, { Component } from 'react';
import './styles/pricing-guide.css';

class FeaturesGuide extends Component {
    render() {
        return (
            <section className="container">
                <div className="pricing-guide">
                    <h2 className="title text-center">Key Features</h2>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">
                                <ul className="text-secondary">
                                    <li><i className="ion-checkmark" /> Unlimited dashboards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturesGuide;