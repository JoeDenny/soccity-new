import React, { Component } from 'react';
import CustomFilters from './CustomFilters';
import FilterResults from './FilterResults';
// import CompetitionList from '../components/CompetitionList';
// import TeamList from '../components/TeamList';
// import PlayerList from '../components/PlayerList';
import './styles/filter-sidebar.css';

class FilterContainer extends Component {

    constructor() {
        super();

        this.state = {
            keywords: []
        }
    }

    addCustomFilter = (keyword) => {

        keyword = keyword.toLowerCase();
        
        if(!this.state.keywords.includes(keyword)) {
            this.setState({
                keywords: [
                    ...this.state.keywords,
                    keyword
                ]
            })            
        }
        
    }

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

                        <h3>Filter Your News Feed</h3>

                        
                        <h4>Filter by keywords: </h4>    

                        <CustomFilters addCustomFilter={this.addCustomFilter} />

                        <FilterResults results={this.state.keywords}/> 

                        {/* <CompetitionList
                            competitions={competitions}
                            filterResults={this.state.filterResults}
                            addToFilter={this.addToFilter}
                            removeFromFilter={this.removeFromFilter} /> */}

                         {/* Preset Filters
                        - Search bar which user can use to search and add keywords. 
                        - Add an area in filters for trending keywords.
                        - Competitions.
                        - Teams. 
                        - Players. 
                        - Publications. 
                        - Hidden publications list
                        - Publication Tiers List - must be check box enabled. 
                        - Custom Twitter Sources: Add/Edit/Remove. 
                        - Custom Twitter Feeds, ie Twitter Search: 
                            - Ability to search keywords, hashtags, images, videos. 
                            - Add/Edit/Remove.  */}

                    </header>
                </div>
            </div>
        )
    }
}

export default FilterContainer;