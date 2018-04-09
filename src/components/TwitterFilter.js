import React, { Component } from 'react';

class TwitterFilter extends Component {
    render() {
        return (
            <section className="col-xs-12 col-md-6">
                <div className="source-feed">
                    <div>
                        <input type="checkbox" />
                        <label>Include Tweets</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Include Image Tweets</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Include Video Tweets</label>
                    </div>
                </div>
            </section>
        )
    }
}

export default TwitterFilter;