import React, { Component } from 'react';
import './styles/dropdown.css';

class Dropdown extends Component {
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutsideDropdown);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutsideDropdown);
    }

    handleClickOutsideDropdown = (event) => {
        const dropdown = document.querySelector('#' + this.props.parentId);
    
        if (this.props.open && dropdown && !dropdown.contains(event.target)) {
          this.props.onClose();
        // }
    }
    
    render() {
        if (!this.props.open) {
            return null;
        }

        const id = this.props.parentId;

        const options = this.props.options.map((item, idx) => {

            return (
                <li
                    key={id + idx}
                    onClick={() => item.onClick ? item.onClick(item) : null} >

                    {item.label}
                </li>
            )
        });

        return (

            <div className="dropdown">

                <div className="menu card">
                    <ul>
                        {options}
                    </ul>
                </div>
            </div>
            );
        }
    }
}

export default Dropdown;