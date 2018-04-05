import React, { Component } from 'react';
import './styles/header.css';

class DashboardHeader extends Component {
    render() {
        return (
            <header className="dashboard-header">
                 <nav className="pull-right">
                     <a href='google.com'>Profile</a>
                </nav>

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