import React, { Component } from 'react';
import './styles/faqs.css';

class Footer extends Component {
    
    render() {
        return (
            <section className="container">
                <div className="faqs">
                    <h2 className="title text-center">Frequently Asked Questions</h2>
                    <div className="card">
                        <h3>Can I upgrade blah blah how do I find the blah blah?</h3>
                        <p>Soccity is built for tblah blah blah blah blah blah ccity, you’ll need to upgrade your entire blah blah.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;