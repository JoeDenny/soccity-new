import React, { Component } from 'react';
import './styles/features-guide.css';

class FeaturesGuide extends Component {
    render() {
        return (
            <section className="container">
                <div className="features-guide">
                    <header>
                        <h2 className="title text-center">Key Features</h2>
                    </header>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">
                                <ul>
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