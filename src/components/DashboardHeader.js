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

    getCustomNews = (type, id) => {

        this.props.getCustomNews(type, id);        
    }

    render() {        

        let upgradeButton;

        if(this.props.user.anonymous) {
            upgradeButton = (
                <Link to={routes.REGISTER_PATH}>
                    <p className="upgrade btn">Register</p>
                </Link>
            )
        } else {
            upgradeButton = (
                <Link to={routes.BILLING_PATH}>
                    <p style={{ display: this.props.user.stripe_id ? 'none' : 'block' }} className="upgrade btn">Upgrade</p>
                </Link>
            )
        }

        return (
            <header className="dashboard-header navbar-sticky-top">

                <Searchbar 
                    getCustomNews={this.getCustomNews}
                    getAllNews={this.props.getAllNews}
                    competitions={this.props.competitions}
                    teams={this.props.teams}
                    players={this.props.players}
                    sources={this.props.sources} />

                <nav className="user-details">
                        <h4 className="username pull-left">
                            <Link to={routes.PREFERENCES_PATH}>{this.props.user.name}</Link>
                        </h4>

                    {upgradeButton}
                    
                    <Link to={routes.PREFERENCES_PATH}>
                        <UserPhoto link={this.props.user.avatar_path} size={50}/>
                    </Link>
                </nav>
                
            </header>
        )
    }
}

export default DashboardHeader;