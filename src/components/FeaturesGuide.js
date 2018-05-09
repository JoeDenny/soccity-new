import React, { Component } from 'react';
import './styles/features-guide.css';

class FeaturesGuide extends Component {
    render() {
        return (
            <section className="container">
                <div className="features-guide">
                    <header>
                        <h2 className="title text-center">The most customizable football news aggregator there is.</h2>
                    </header>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">

                                <h3><i className="ion-clipboard" /><span>Keyword Filters</span></h3>
                                <ul>
                                    <li>Browsing news has never been this convenient. Use keywords to filter through prominent publications and Twitter accounts to receive the exact news you want.</li>
                                </ul>
                                
                                <h3><i className="ion-speedometer" /> Speed</h3>
                                <ul>
                                    <li>Get news at up to 30 second intervals for those VVIMP transfer news updates.</li>
                                </ul>
                                  
                                <h3><i className="ion-locked" /> Credibility</h3>
                                <ul>
                                    <li>Choose to follow the most reliable journalists and the most reputable publications; hide the rest.</li>
                                    <li>Credibility Rating: We've designed a credibility system by allotting news publications into a tier system so that you are in control of what you view.</li>
                                </ul>
                               
                                <h3><i className="ion-iphone" /> Social Media</h3>
                                <ul>
                                    <li><strong>Reliable Tweets:</strong> We've collected the best Twitter accounts, separated them into tiers, and added them to our 'Default Tweets' pool for your convenience. </li>
                                    <li>Custom Twitter Accounts: Add your favourite Twitter accounts that aren't already available in the 'Default Tweets' pool.</li>
                                    <li>Twitter feeds: Afraid of missing out on breaking news or trends on Twitter? We've got you covered! Add any hashtag feeds to dashboards and never miss out on anything again! </li>
                                </ul>

                                <h3><i className="ion-android-notifications-none" /> Keyword Notifications</h3>
                                
                                <ul>
                                    <li>Too busy to browser through news? Let Source Buffet notify you with news based on custom keywords and publication tiers of YOUR choice.</li>
                                </ul>

                                <h3><i className="ion-ios-time-outline" /> Blast Into The Past</h3>
                                <ul>
                                    <li>Search for any articles from the time of inception of Source Buffet.</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturesGuide;