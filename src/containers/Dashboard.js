import React, { Component } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import axios from 'axios';
import * as moment from 'moment';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            allNews: []
        }
    }

    componentWillMount() {
        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss')
        };

        axios.get(`http://35.176.191.198/api/news?time=${params.time}`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc1NzBlODhiZjQ4ZTE4MmQ3NzgyZTU4NzdiNTNjN2ZkZGQwY2Q3Y2YxOWU0NDM3YmIwZWM4MDYwZTQyZGU5MjkxMTE4ZDExNjFhOTBlMjk0In0.eyJhdWQiOiIxIiwianRpIjoiNzU3MGU4OGJmNDhlMTgyZDc3ODJlNTg3N2I1M2M3ZmRkZDBjZDdjZjE5ZTQ0MzdiYjBlYzgwNjBlNDJkZTkyOTExMThkMTE2MWE5MGUyOTQiLCJpYXQiOjE1MjI5NDE2OTEsIm5iZiI6MTUyMjk0MTY5MSwiZXhwIjoxNTU0NDc3NjkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Ec5rnYHxtmyP5DQvy2aS92dYY40QhQbAcvFewBWtX3RZiQOWxZo2cPx52oK-_eMtIVMySJhKtQXzOQh5r6HxQr3y4LY91iu8GaNnGP8cM6i5nUF9hbwzV85QdfG1BoBo3SeRMGEoc_RYrDIKMh4HRdVSSAE_yqx_Wezi6DgYb7YdT4J3Oqt0ND1fF3qh8Qh0zJqK8-F-sO1t7YwmfBZIuxY23G339hhcwN6xPU_LY6TS15IGXXrSsqjpAhFE6BdYvz4y-2V1sUYnLyEYGwJXLmPy3npZ2ArMtaidF1pIB9UqegwiwMfe-pSG1fDwPJSD3IHad0bbErfVcNEBgRZfBA4KS1XSYJLFcQADGyrAFBBra2kAWB2ZmCVKIa6AzC0Bl4BoocuJZ47sG57SXErmGfz9WOSHYTXIM4LJFAMLmU6wXQo-ZXiBmso4PpllNm63Ir07ikOLfUkpnIvMx9Ee8CmgRZ4Rd9GGTjuzh4sML4cVNvcIx_ZJW6GRH4PyIuVWrre_OJUiUmxhMdEwdRkfHzpkZdUj4nJe_4rangHJ1ppHD085jIlg3YtW9W6tzzCmHEIM_5XG3J-dPiQwISWck2Tu38gTJPYI4Ik8G1s3HEAFf-_Q5J_J0LdDan237rKHLqrrEMVPqlIO1gJIX_jc0Qn53Mg6pjNnoBbBvMUYqXg`
            }
        })
            .then(res => {
                const allNews = res.data.allNews.data;
                this.setState({ allNews });                                
            })
    }

    render() {
        return (
            <section className="app-dashboard">
            
                <DashboardHeader />
                
                <Sidebar />

                <NewsFeed allNews={this.state.allNews}/>
            </section>
        )
    }
}

export default Dashboard;