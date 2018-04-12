import React, { Component } from 'react';
import './styles/searchbar.css';

class CustomFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };
    }
    onChange = (event) => {
        
        this.setState({
            keyword: event.currentTarget.value
        });
    }
    
    onSubmit = (event) => {        
        event.preventDefault();

        this.props.addCustomFilter(this.state.keyword);

        this.setState({
            keyword: ''
        });
    }



    render() {
        return (
            <div className="searchbar">

                <div className="search-icon">
                        <svg viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
                </div>
                <input
                    type="text"
                    value={this.state.keyword}
                    placeholder="e.g. Arsenal"
                    onChange={this.onChange} />

                <button
                    type="button" 
                    onClick={this.onSubmit}
                    className="add-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                </button>
            </div>
        )
    }
}

export default CustomFilters;