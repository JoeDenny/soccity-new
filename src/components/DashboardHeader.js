import React, { Component } from 'react';
import UserPhoto from './UserPhoto';
import Searchbar from './Search';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import './styles/header.css';

class DashboardHeader extends Component {
    render() {        
        return (
            <header className="dashboard-header navbar-sticky-top">

                <Searchbar />

                <nav className="user-details">
                    <h5 className="username pull-left">{this.props.user.name}</h5>
                    <Link to={routes.PROFILE_PATH}>
                        <UserPhoto link="http://35.176.191.198/images/default_avatars/profile1.png" size={50}/>
                    </Link>
                </nav>
                
            </header>
        )
    }
}

export default DashboardHeader;