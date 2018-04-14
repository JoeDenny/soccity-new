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
                action = 'You liked an article';
                break
            default:
                action = this.props.activity.type;
        }
        return (
            <tr>
                <td>{this.props.activity.subject.created_at_formated}</td>
                <td>{this.props.activity.user.name}</td>
                <td>{action}</td>
            </tr>
        )
    }
}

export default ActivityItem;