import React, { Component } from 'react';
import './styles/filter-sidebar.css';

class FilterContainer extends Component {
    closeFilter = () => {
        this.props.onCloseFilter();
    }

    onSendComment = (comment) => {
        const { activeNews } = this.props;
        
        if (activeNews) {
            this.props.addComment(activeNews.id, comment);
        }
    }

    render() {
        
        const className = `dashboard-filter ${this.props.isVisible ? 'open' : ''}`;
        
        return (
            <div className={className}>
                <div className="fixed-content">  
                    <header>
                        <button
                            type="button"
                            className="close-icon pull-right"
                            onClick={this.closeFilter}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                        </button>

                        <h3>Current Filter Settings</h3>
                    </header>
                </div>
            </div>
        )
    }
}

export default FilterContainer;