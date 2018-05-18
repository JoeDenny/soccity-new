import React, { Component } from 'react';

class NewsArticle extends Component {
    componentWillMount() {

        const { match: { params } } = this.props;
        

        if(params.url) {

            // console.log('window', window.location.href);
            // window.location.href = 'www.google.com';
            this.openInNewTab()

            // console.log(params.url);
            
        }
    }

    openInNewTab() {
        var win = window.open('https://www.elnuevodiario.com.ni/internacionales/centroamerica/464496-latinoamerica-competencias-globales-educacion/');
        win.focus();
    }
    
    render() {
     return (
         <h1 onClick={this.openInNewTab}>article page</h1>
     )
    }
}

export default NewsArticle;