import React, { Component } from 'react';
import './styles/activity.css';

class ActivityItem extends Component {

    render() {

        let action;

        switch(this.props.activity.type) {
            case 'created_comment':
                action = 'commented on an article';
                break
            case 'created_favorite':
                action = 'liked an article';
                break
            case 'created_dashboard':
                action = 'created a dashboard';
                break
            default:
                action = this.props.activity.type;
        }
        return (
            <tr>
                <td><span>{this.props.activity.subject.created_at_formated}</span> {this.props.activity.user.name} {action}</td>
                {/* <td></td> */}
                {/* <td>{action}</td> */}
            </tr>
        )
    }
}

export default ActivityItem;