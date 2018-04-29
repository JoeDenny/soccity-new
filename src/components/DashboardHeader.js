import React, { Component } from 'react';
import UserPhoto from './UserPhoto';
import Searchbar from './Search';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import './styles/header.css';

class DashboardHeader extends Component {
    setSearchTerm = (searchTerm) => {

        this.props.setSearchTerm(searchTerm);
    }

    render() {        

        return (
            <header className="dashboard-header navbar-sticky-top">

                <Searchbar setSearchTerm={this.setSearchTerm}/>

                <nav className="user-details">
                    <h5 className="username pull-left">{this.props.user.name}</h5>

                    <Link to={routes.BILLING_PATH}>
                        <p style={{ display: this.props.user.stripe_id ? 'none' : 'block' }} className="upgrade bold card">Upgrade?</p>
                    </Link>
                    
                    <Link to={routes.PREFERENCES_PATH}>
                        <UserPhoto link={this.props.user.avatar_path} size={50}/>
                    </Link>
                </nav>
                
            </header>
        )
    }
}

export default DashboardHeader;