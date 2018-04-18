import React, { Component } from 'react';
import './styles/faqs.css';

class Footer extends Component {
    
    render() {
        return (
            <section className="container">
                <div className="faqs">
                    <h2 className="title text-center">Frequently Asked Questions</h2>
                    <div className="card">
                        <h3>Do I need to pay to use Soccity?</h3>
                        <p>You don't! You can create unlimited dashboards by subscribing to our free plan and still enjoy all that Soccity has to offer.</p>
                    </div>
                    <div className="card">
                        <h3>What are miles?</h3>
                        <p>One mile is characterized as one news card/post. This means, each time you scroll completely past a news card, you will have covered one mile. If you scroll past three news cards displayed on the same row, you will have covered three miles.</p>
                    </div>
                    <div className="card">
                        <h3>What happens if I'm on the free plan and I run out of miles?</h3>
                        <p>Worry not, we've got you covered! If you run out of miles and wish to continue with the free plan, you can earn more miles by viewing an advertisement. At the end of the month, the counter resets and you start afresh with 2000 miles for the next month.</p>
                    </div>
                    <div className="card">
                        <h3>Why then should I pay for the PRO plan?</h3>
                        <p>The PRO plan is designed for the hardcore fan, and professionals in the industry. If you feel like you might need more than 2000 miles per month, and if advanced features such as keyword search and a 10-second auto-refresh rate appeal to you, then you should subscribe to the PRO plan.</p>
                    </div>
                    <div className="card">
                        <h3>What forms of payment do you accept?</h3>
                        <p>We accept payment from all the major credit cards, as well as PayPal.</p>
                    </div>
                    <div className="card">
                        <h3>Is it safe for me to pay on your website?</h3>
                        <p>Absolutely! We are fully PCI compliant and our website is completely encrypted with SSL, so you can make your purchase completely free from concern.</p>
                    </div>
                    <div className="card">
                        <h3>Do I have to submit my payment information to subscribe to the 7-day free trial of the PRO plan?</h3>
                        <p>You don't! You can start your 7-day free trial without submitting your payment details. CLICK HERE to try us out today.</p>
                    </div>
                    <div className="card">
                        <h3>Can I cancel my PRO plan at any time?</h3>
                        <p>You have the complete freedom to cancel your subscription at any time you want. Midnights and early mornings included.</p>
                    </div>
                    <div className="card">
                        <h3>Can I upgrade from a free subscriber to the PRO plan anytime?</h3>
                        <p>Yup!</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;