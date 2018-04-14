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
                    <table className="table text-center" key={day}>
                        <thead>
                            <tr>
                                <th colSpan="3" className="date">{day}</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.activity[day].map(action => {
                                    return <ActivityItem key={action.id} activity={action}/>;
                                })
                            }
                        </tbody>
                    </table>                       
                );
            });

            messageClass = `no-activity ${!allActivity.length ? 'show' : ''}`;
           
        }    
       return(
           <div className="activity container">
                <div className="text-center">
                    <h2 className="title">Your Activity</h2>
                    <p className={messageClass}>You haven't done anything yet!</p>
                </div>

                {allActivity}
           </div>
       )
    }
}

export default UserActivity;