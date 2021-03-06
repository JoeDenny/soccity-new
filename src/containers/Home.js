import React, { Component } from 'react';
import './styles/home.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Header from '../components/Header';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import FeaturesGuide from '../components/FeaturesGuide';
import PricingGuide from '../components/PricingGuide';
import { anonymousLogin } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            headerIsFixed: false
        }                
    }

    anonymousLogin = () => {
        this.props.anonymousLogin();
    }

    componentWillReceiveProps(newProps) {
        console.log('newprops', newProps);
        
        if (newProps.token) {            
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
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

            {/* <button className="js-push-button" disabled>
            Enable Push Messages  
            </button> */}

                <Header fixedHeader={this.state.fixedHeader}/>

                <div className="background-color-block"></div>

                <div className="container">
                    <div className="hero">
                        <h2>Reliable News. Quality Stories.</h2>
                        <h4>Soccity is an ad-free publication featuring quality soccer stories and reliable soccer news.</h4>
                        
                        <div className="btn-container">
                            <button className="btn btn-primary" onClick={this.anonymousLogin}>Get Started For Free</button>
                            <Link to={routes.REGISTER_PATH}>
                                <button className="btn btn-secondary">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div onClick={this.anonymousLogin} className="dashboard-preview card"></div>
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

const mapStateToProps = (state) => ({
    token: state.token 
});

const mapDispatchToProps = (dispatch) => ({
    anonymousLogin: () => dispatch(anonymousLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);