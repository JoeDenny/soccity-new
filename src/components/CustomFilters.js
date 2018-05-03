import React, { Component } from 'react';
import './styles/custom-filter.css';

class CustomFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {

            this.onSubmit(event);    
        }
    }
    
    
    onChange = (event) => {
        
        this.setState({
            keyword: event.currentTarget.value
        });
    }
    
    onSubmit = (event) => {        
        event.preventDefault();

        if(this.state.keyword.length > 0) {
            
            this.props.addCustomFilter(this.state.keyword);
    
            this.setState({
                keyword: ''
            });
        }        
    }

    render() {
        return (
            <div className="custom-filter-input input-wrapper">
                <input
                    type="text"
                    onKeyPress={this.handleKeyPress}
                    className="text-input"
                    value={this.state.keyword}
                    placeholder="e.g. Arsenal"
                    onChange={this.onChange} />
            </div>
        )
    }
}

export default CustomFilters;