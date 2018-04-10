import React, { Component } from 'react';

class DashboardSettings extends Component {
    render() {
        return (
            <section className="user-actions">
                <ul className="filter-list">
                {/* {this.props.list && this.props.list.map((setting) => (
                        <li key={setting.id} className="filter-list__item">
                            <SettingItem
                                logo={setting.logo_path || setting.image_path}
                                size={60}
                                title={setting.display_name || setting.title || setting.name}
                                setting={setting}
                                onClick={this.onAddSetting}
                            />
                        </li>
                    ))
                } */}
            </ul>
            </section>
        )
    }
}

export default DashboardSettings;