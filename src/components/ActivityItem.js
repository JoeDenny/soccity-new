import React, { Component } from 'react';
import './styles/activity.css';

class ActivityItem extends Component {

    render() {
        return (
            <div className="activity-item">
                
                <span>{this.props.activity.subject.created_at_formated}</span>|
                {/* <span className="comment">{this.props.activity.subject.comment}</span> */}
                <span>{this.props.activity.user.name}</span>|
                <span>{this.props.activity.type}</span>

            </div>
        )
    }
}

export default ActivityItem;