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
    }

    render() {
        return (
            <div className="share-container">
                
        
                <CopyToClipboard text={this.state.value}
                    onCopy={() => this.setState({copied: true})}>
                    <button className="btn btn-secondary" onClick={this.onClick}>Share Article</button>
                </CopyToClipboard>
        
                {this.state.copied ? <span className="copied-message card">Copied to clipboard!</span> : null}

                
            </div>
        );
    }
}

export default ShareSection;