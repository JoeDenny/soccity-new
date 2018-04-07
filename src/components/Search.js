import React, { Component } from 'react';
import './styles/searchbar.css';

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">

                <div className="search-icon">
                        <svg viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>
                        <input type="text" placeholder="Search for competitions, teams, players, or publication sources"/>
                    </div>
            </div>
        )
    }
}

export default Searchbar;