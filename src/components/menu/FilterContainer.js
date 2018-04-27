import React, { Component } from 'react';
import CustomFilters from '../CustomFilters';
import FilterResults from '../FilterResults';
// import CompetitionList from '../components/CompetitionList';
// import TeamList from '../components/TeamList';
// import PlayerList from '../components/PlayerList';
import '../styles/filter-sidebar.css';

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
                
        return (
            <div className="dashboard-filter">
                <div className="scrollable">
                        
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
                </div>
            </div>
        )
    }
}

export default FilterContainer;