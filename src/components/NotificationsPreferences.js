import React, { Component } from 'react';


class NotificationsPreferences extends Component {

    render() {
    
        return (
            <div className="notifications-section">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <h3>Notifications Preferences</h3>
                    </div>
                    <div className="col-xs-12 col-md-8">
                    
                        <div className="box">
                            <ul>
                                <li className="filter-card text-secondary">
                                    <p className="name">Enable desktop notifications</p>
                                    <input type="checkbox" />
                                </li>
                                <li className="filter-card text-secondary">
                                    <p className="name">Include preview of messages in each notification</p>
                                    <input type="checkbox" />
                                </li>
                                <li className="filter-card text-secondary">
                                    <p className="name">Notify me about replies</p>
                                    <input type="checkbox" />
                                </li>
                                <li className="filter-card text-secondary">
                                    <p className="name">Notify me about replies to threads I've commented on</p>
                                    <input type="checkbox" />
                                </li>
                                <li className="filter-card text-secondary">
                                    <p className="name">Mute all sounds</p>
                                    <input type="checkbox" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotificationsPreferences;