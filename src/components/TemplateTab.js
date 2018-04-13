import React, { Component } from 'react';
import './styles/template-tab.css';

class TemplateTab extends Component {
    constructor(props) {
        super(props);

        this.onChangeTemplate = this.onChangeTemplate.bind(this);
    }

    onChangeTemplate(e) {
        this.props.onChangeTemplate(e.target.checked);                
    }

    render() {
       

        return (
           <div className="template-tab">
            <label className="switch">
                <input type="checkbox" onChange={this.onChangeTemplate} />
                <span className="slider round"></span>
            </label>
           </div>
        )
    }
}

export default TemplateTab;