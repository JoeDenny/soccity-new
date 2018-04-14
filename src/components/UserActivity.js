import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

class UserActivity extends Component {
    render() {
        let allActivity,
        messageClass;   

        if(this.props.activity) {            
            const keys = Object.keys(this.props.activity);

            allActivity = keys.map(day => {                
                return (
                   <div key={day}>
                       <h4 className="date">{day}</h4>
                       
                       {
                           this.props.activity[day].map(action => {

                            return <ActivityItem key={action.id} activity={action}/>;
                           })
                        }
                   </div>
                );
            });

            messageClass = `no-activity ${!allActivity.length ? 'show' : ''}`;
           
        }    
       return(
           <div className="activity container text-center">
                <h2 className="title">Your Activity</h2>
                <p className={messageClass}>You haven't done anything yet!</p>
                {allActivity}
           </div>
       )
    }
}

export default UserActivity;