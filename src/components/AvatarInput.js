import React, { Component } from 'react';
import './styles/avatar-input.css';

class AvatarInput extends Component {
    onChange = (event) => {
        const target = event.currentTarget;

        if (target && target.files && target.files.length > 0) {
            const file = target.files[0];

            this.props.onChange(file);
            this.updateImg(file);
        }
    }
    updateImg = (file) => {
        const fr = new FileReader(),
            img = document.querySelector('.file-input__placeholder-img');

        fr.onload = () => {
            if (img) {
                img.setAttribute('src', fr.result); 
            }
        };
        fr.readAsDataURL(file);
    }
    render() {
        const { name } = this.props;
        return (
            <div className="file-input">
                <div className="file-input__placeholder">
                    <img
                        className="file-input__placeholder-img"
                        alt="avatar"
                    />
                </div>
                <label>
                    <input 
                        type="file" 
                        onChange={this.onChange}
                        name={name}
                    />
                    <div className="file-input__btn">Upload image</div>
                </label>
            </div>
        );
    }
}

export default AvatarInput;