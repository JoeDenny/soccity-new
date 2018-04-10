import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';
import TemplateTab from './TemplateTab';

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.onOpenComments = this.onOpenComments.bind(this);
        this.changeTemplate = this.changeTemplate.bind(this);
        this.state = {
            template: 1
        }
    }

    componentWillMount() {
        this.setState({
            template: 1
        })
    }

    onOpenComments() {
        this.props.onOpenComments();
    }

    changeTemplate(toggleOn) {
        
        if(toggleOn) {
            this.setState({
                template: 2
            });
        } else {
            this.setState({
                template: 1
            });
        }
    }

    render() {
        let newsItems;

        let className = `news-feed ${this.state.template === 1 ? 'template1' : 'template2'}`;        
        
        if(this.props.allNews) {
            newsItems = this.props.allNews.map(newsItem => {

                return (
                    <NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments}/>
                );
            });
        }    

        return (
            <section className={className}>

                    <TemplateTab onChangeTemplate={this.changeTemplate}/>

                    <ul className="row">
                        {newsItems}
                    </ul>
            </section>
        )
    }
}

export default NewsFeed;