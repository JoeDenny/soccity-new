import React, { Component } from 'react';
import './styles/header.css';
import Searchbar from './Search';

class DashboardHeader extends Component {
    render() {
        return (
            <header className="dashboard-header navbar-sticky-top">

                <nav className="pull-right">
                     {/* <a href='google.com'>Profile</a> */}
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