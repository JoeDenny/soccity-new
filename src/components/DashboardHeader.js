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

                <nav className="pull-right">
                    <Link to={routes.PROFILE_PATH}>
                        <UserPhoto link="http://35.176.191.198/images/default_avatars/profile1.png" size={60}/>
                    </Link>
                </nav>

                <Searchbar />
                
                {/* <DashboardFilterList>
                    <FilterItem />
                </DashboardFilterList>

                <DashboardTemplateList>
                    <ChangeTemplate />
                </DashboardTemplateList> */}
            </header>
        )
    }
}

export default DashboardHeader;