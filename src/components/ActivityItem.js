import React, { Component } from 'react';
import './styles/activity.css';

class ActivityItem extends Component {

    render() {

        let action;

        switch(this.props.activity.type) {
            case 'created_comment':
                action = 'You commented';
                break
            case 'created_favorite':
                action = 'Liked an article';
                break
            default:
                action = this.props.activity.type;
        }
        return (
            <div className="activity-item">
                
                <span>{this.props.activity.subject.created_at_formated}</span>|
                <span>{this.props.activity.user.name}</span>|
                <span>{action}</span>

            </div>
        )
    }
}

export default ActivityItem;