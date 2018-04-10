import axios from 'axios';

class Api {
    token = undefined;
    API_URL = 'http://35.176.191.198/api';

    login = (email, password) => {        
        return axios.post(`${this.API_URL}/login`, {
            email,
            password
        });
    }

    register = (formData) => {        
        return axios.post(`${this.API_URL}/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    
    getTeams = () => {
    
        return axios.get(`${this.API_URL}/teams`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getSources = () => {
    
        return axios.get(`${this.API_URL}/sources`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getNews = (params) => {

        return axios.get(`${this.API_URL}/news?time=${params.time}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getUserActivity = () => {

        return axios.get(`${this.API_URL}/user/activity`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    addComment = (id, comment) => {
        return axios.post(`${this.API_URL}/news/${id}/comments`, { comment }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    favouriteArticle = (id) => {
        return axios.post(`${this.API_URL}/news/${id}/toggle_favorite`, null, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    saveToken(token) {    
        
        this.token = token;
    }

    getToken() {
        return this.token;
    }
}

const api = new Api();

export default api;