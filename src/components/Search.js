import React, { Component } from 'react';
import './styles/searchbar.css';

class Searchbar extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
            searchTerm: ''
        }
    }

    onChange = (event) => {

        let searchTerm = event.target.value;

        this.setState({searchTerm});
        
        if(searchTerm.length) {
            this.setState({
                isOpen: true,
            });
        } else {
            this.props.getAllNews();
            this.setState({
                isOpen: false
            });
        }
    }

    handleClick = (type, item) => {

        this.setState({
            isOpen: false
        });
        this.props.getCustomNews(type, item.id);
    }

    render() {
        let isOpenClass = this.state.isOpen ? 'open' : '',
            searchList = [];

        if(this.props.teams) {

            let filteredList;

            filteredList = this.props.teams.reduce((result, item, index) => {
                if (item.name.toLowerCase().includes(this.state.searchTerm)) {

                    result.push(
                        <li key={"team-" + item.id}
                            onClick={() => this.handleClick('teams', item)}>{item.name}</li>
                    )
                }
                return result;           
            }, []);   
                        
            searchList = searchList.concat(filteredList)
        }
        
        if(this.props.sources) {

            let filteredList;

            filteredList = this.props.sources.reduce((result, item, index) => {
                if (item.title.toLowerCase().includes(this.state.searchTerm)) {

                    result.push(
                        <li key={"source-" + item.id}
                            onClick={() => this.handleClick('sources', item)}>{item.title}</li>
                    )
                }
                return result;           
            }, []);   
                        
            searchList = searchList.concat(filteredList)
        }        

        if(this.props.players) {

            let filteredList;

            filteredList = this.props.players.reduce((result, item, index) => {
                if (item.name.toLowerCase().includes(this.state.searchTerm)) {

                    result.push(
                        <li key={"player-" + item.id}
                            onClick={() => this.handleClick('players', item)}>{item.name}</li>
                    )
                }
                return result;           
            }, []);   
                        
            searchList = searchList.concat(filteredList)
        }        

        if(this.props.competitions) {

            let filteredList;

            filteredList = this.props.competitions.reduce((result, item, index) => {
                if (item.name.toLowerCase().includes(this.state.searchTerm)) {

                    result.push(
                        <li key={"competition-" + item.id}
                            onClick={() => this.handleClick('competitions', item)}>{item.name}</li>
                    )
                }
                return result;           
            }, []);   
                        
            searchList = searchList.concat(filteredList)
        }        

        return (
            <div className={"searchbar"}>

                <div className="search-icon">
                        <svg viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
                </div>
                <input
                    type="text"
                    placeholder="Search for Teams, Players, Competitions or Publication Sources"
                    onChange={this.onChange} />

                <div className={"dropdown " + isOpenClass}
                    id="dropdown">
                    <div className="menu card">
                        <ul>
                            {searchList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Searchbar;