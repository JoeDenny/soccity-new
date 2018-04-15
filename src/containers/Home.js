import React, { Component } from 'react';
import './styles/home.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Header from '../components/Header';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import FeaturesGuide from '../components/FeaturesGuide';
import PricingGuide from '../components/PricingGuide';
import api from '../api';

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

        const className = `app-home ${api.getToken() ? 'logged-in' : 'logged-out' }`
        
        return (
            <section className={className}>

                <Header fixedHeader={this.state.fixedHeader}/>

                <div className="background-color-block"></div>

                <div className="container">
                    <div className="hero">
                        <h2>Reliable News. Quality Stories.</h2>
                        <h4>Soccity is an ad-free publication featuring quality soccer stories and reliable soccer news.</h4>
                        
                        <div className="btn-container">
                            <div className="auth-btns">
                                <Link to={routes.DASHBOARD_PATH}>
                                    <button className="btn btn-primary">Get Started For Free</button>
                                </Link>
                                <Link to={routes.REGISTER_PATH}>
                                    <button className="btn btn-secondary">Register</button>
                                </Link>
                            </div>
                            <div className="dashboard-btn">
                                <Link to={routes.DASHBOARD_PATH}>
                                    <button className="btn btn-primary">Go to dashboard</button>
                                </Link>
                            </div>
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

                <Faqs />
                
                <Footer />

            </section>
        );
    }
}

export default Home;