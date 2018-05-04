import React, { Component } from 'react';
import AddDashboard from '../../containers/AddDashboard';
import '../styles/filter-sidebar.css';

class FilterContainer extends Component {

    constructor() {
        super();

        this.state = {
            keywords: []
        }
    }

    closeFilter = () => {
        this.props.onCloseFilter();
    }

  
    render() {
                
        return (
            <div className="dashboard-filter">
                <div className="scrollable">
                        
                    <AddDashboard activeDashboard={this.props.activeDashboard}/>
                </div>
            </div>
        )
    }
}

export default FilterContainer;