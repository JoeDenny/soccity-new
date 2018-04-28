import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';

class CompetitionList extends Component {

    addCompetition = (competition) => {

        this.props.addToFilter('competitions', competition);        
    }

    removeCompetition = (competition) => {

        this.props.removeFromFilter('competitions', competition);        
    }

    setActiveCatergory = (id) => {

        this.props.setActiveCatergory('competitionId', id)
    }

    render() {
        let competitions,
            isInFilterResults;
        
        if(this.props.competitions) {
            competitions = this.props.competitions.map(competition => {

                isInFilterResults = this.props.filterResults.includes(competition) ? true : false;
              
                return (
                        <FilterCard
                            key={competition.id}
                            data={competition}
                            setActiveCatergory={this.setActiveCatergory}
                            addToFilter={this.addCompetition}
                            removeFromFilter={this.removeCompetition}
                            isInFilterResults={isInFilterResults} />
                )   
            });
        }    

        return (
            <div className="list competition-feed">
                <header>
                    <h4 className="list-title">Add competitions</h4>
                </header>
                
                <ul>
                    {competitions}
                </ul>
            </div>
        )
    }
}

export default CompetitionList;