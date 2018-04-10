import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

class UserActivity extends Component {
    render() {
        let allActivity;   

        if(this.props.activity) {            
            const keys = Object.keys(this.props.activity);

            allActivity = keys.map(day => {                
                return (
                   <div key={day}>
                       <h2>{day}</h2>
                       
                       {
                           this.props.activity[day].map(action => {

                            return <ActivityItem key={action.id} activity={action}/>;
                           })
                        }
                   </div>
                );
            });
           
        }    
       return(
           <div className="container text-center">{allActivity}</div>
       )
    }
}

export default UserActivity;