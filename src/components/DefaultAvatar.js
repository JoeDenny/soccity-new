import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDefaultAvatars } from '../actions';
import './styles/avatar-input.css';

class DefaultAvatar extends Component {

    componentWillMount() {
        this.props.getDefaultAvatars();
    }

    updateAvatar(i) {        
        this.props.updateAvatar(this.props.defaultAvatars[i])
    }

    render() {
        let avatars;

        if(this.props.defaultAvatars) {
            avatars = this.props.defaultAvatars.map((avatar, i) => {
                
                return (
                    <img
                        src={avatar}
                        onClick={() => this.updateAvatar(i)}
                        key={i}
                        className="avatar-icon"
                        alt="" />
                )
            });
        }
        
        return (
            <div className="default-avatar-list">
                <h3>Upload your own avatar, or choose one from the list below!</h3>
                   {avatars}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    defaultAvatars: state.defaultAvatars
});

const mapDispatchToProps = (dispatch) => ({
    getDefaultAvatars: () => dispatch(getDefaultAvatars())
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultAvatar);