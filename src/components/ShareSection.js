import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styles/share-section.css';

class ShareSection extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            copied: false
        };
    }

    componentWillMount() {
        this.setState({
            value: "https://c.sourcebuffet.net/news/" + this.props.id
        })
    }

    onClick = () => {

        setTimeout(() => {
            this.setState({
                copied: false
            })
        }, 2500);

        // this.props.toggleDropdown();
    }

    render() {
        return (
            <div className="share-container">
                
        
                <CopyToClipboard text={this.state.value}
                    onCopy={() => this.setState({copied: true})}>
                    <button className="btn btn-secondary" onClick={this.onClick}>Share</button>
                </CopyToClipboard>
        
                {this.state.copied ? <div className="copied-message"><span className="card">Copied to clipboard!</span></div> : null}

            </div>
        );
    }
}

export default ShareSection;