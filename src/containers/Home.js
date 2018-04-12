import React, { Component } from 'react';
import './styles/home.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesGuide from '../components/FeaturesGuide';
import PricingGuide from '../components/PricingGuide';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            headerIsFixed: false
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {

        if(window.scrollY > 100) {
            this.setState({
                fixedHeader: true
            });
        } else {
            this.setState({
                fixedHeader: false
            });
        }
    }

    render() {
        return (
            <section className="app-home">

                <Header fixedHeader={this.state.fixedHeader}/>

                <div className="background-color-block"></div>

                <div className="container">
                    <div className="hero">
                        <h2>Reliable News. Quality Stories.</h2>
                        <h4>Soccity is an ad-free publication featuring quality soccer stories and reliable soccer news.</h4>

                        <div className="btn-container">
                            <button className="btn btn-primary">
                                <Link to={routes.DASHBOARD_PATH}>Get Started For Free</Link>
                            </button>
                            <button className="btn btn-secondary">
                                <Link to={routes.REGISTER_PATH}>Register</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Link to={routes.DASHBOARD_PATH}>
                        <div className="dashboard-preview card"></div>
                    </Link>
                </div>

                <div className="background-color-block two"></div>
                
                <FeaturesGuide />
                
                <PricingGuide />
                
                <Footer />

            </section>
        );
    }
}

export default Home;