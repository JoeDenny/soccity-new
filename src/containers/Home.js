import React, { Component } from 'react';
import './styles/home.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Header from '../components/Header';
import PricingGuide from '../components/PricingGuide';

class Home extends Component {

    render() {
        return (
            <section>

                <Header />

                <div className="container">
                    <div className="hero text-center">
                        <h2>Reliable News. Quality Stories.</h2>
                        <h4>Soccity is an ad-free publication featuring quality soccer stories and reliable soccer news.</h4>
                        <button className="btn btn-primary">
                            <Link to={routes.DASHBOARD_PATH}>Get Started</Link>
                        </button>
                    </div>
                </div>

                <div className="container">
                    <div className="dashboard-preview">
                        <Link to={routes.DASHBOARD_PATH}>
                            {/* <Dashboard /> */}
                        </Link>
                    </div>
                </div>

                <PricingGuide />

            </section>
        );
    }
}

export default Home;