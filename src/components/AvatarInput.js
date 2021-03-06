import React, { Component } from 'react';
import DefaultAvatar from '../components/DefaultAvatar';
import './styles/avatar-input.css';

class AvatarInput extends Component {
    onChange = (event) => {
        const target = event.currentTarget;

        if (target && target.files && target.files.length > 0) {
            const file = target.files[0];

            this.props.handleImageUpload(file);
            this.updateImg(file);
        }
    }
    updateImg = (file) => {
        const fr = new FileReader(),
            img = document.querySelector('.avatar-icon');

        fr.onload = () => {
            if (img) {
                img.setAttribute('src', fr.result); 
            }
        };
        fr.readAsDataURL(file);
    }

    updateAvatar = (avatarSrc) => {
        const img = document.querySelector('.avatar-icon');

        if(img) {
            img.setAttribute('src', avatarSrc)
        }

        this.props.handleDefaultAvatarUpload(avatarSrc);
    }

    render() {
        return (
            <div className="file-input">
                <div className="avatar-container">
                    <img
                        src={this.props.user.avatar_path}
                        className="avatar-icon"
                        alt=""
                    />
                </div>
                <label>
                    <input 
                        type="file" 
                        onChange={this.onChange}
                        name="avatar"
                    />
                    <div className="file-input__btn">Upload image</div>
                </label>

                <DefaultAvatar updateAvatar={this.updateAvatar}/>
            </div>
        );
    }
}

export default AvatarInput;