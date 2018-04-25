import React, { Component } from 'react';
import './styles/errors.css';

class ErrorMessages extends Component {
    
    render() {
        let allErrors = [];  
                
        if(this.props.errors) {   
            
            for(let error in this.props.errors) {
                
                let errorMessage = this.props.errors[error];
                allErrors.push(<li key={errorMessage}><span>{errorMessage}</span></li>); 
            }
        }
        
        return (
            <section className="errors-container">
                <ul>
                    {allErrors}
                </ul>
            </section>
        )
    }
}

export default ErrorMessages;