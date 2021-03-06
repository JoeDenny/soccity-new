import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';
import rightArrow from '../images/right-arrow.png';
import leftArrow from '../images/left-arrow.png';

class CompetitionList extends Component {

    addCompetition = (competition) => {

        this.props.addToFilter('competitions', competition);        
    }

    removeCompetition = (competition) => {

        this.props.removeFromFilter('competitions', competition);        
    }

    setActiveCompetitionId = (id) => {        
        this.props.setActiveCompetitionId(id)
    }

    render() {
        let competitions;        
        
        if(this.props.competitions) {
            competitions = this.props.competitions.map(competition => {
                let isActive;

                if(this.props.filterResults) {
                    isActive = this.props.filterResults.includes(competition);
                }
                
                return (
                        <FilterCard
                            key={competition.id}
                            isActive={isActive}
                            data={competition}
                            setActiveId={this.setActiveCompetitionId}
                            addToFilter={this.addCompetition}
                            removeFromFilter={this.removeCompetition} />
                )   
            });
        }    

        return (
            <div className="relative">
                <div className="list competition-list">
                    <header>
                        <h4 className="list-title">Add competitions</h4>
                    </header>
                    
                    <ul>
                        {competitions}
                    </ul>
                </div>
                <div className="arrow-icon left disabled">
                    <img src={leftArrow} alt="" />
                </div>
                <div className="arrow-icon right" onClick={() => this.setActiveCompetitionId(undefined)}>
                    {/* <div className="arrow"></div> */}
                    <img src={rightArrow} alt="" />
                </div>
                <p className="breadcrumbs">Competitions</p>
            </div>
        )
    }
}

export default CompetitionList;