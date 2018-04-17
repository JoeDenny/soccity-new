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
        return axios.post(`${this.API_URL}/register`, formData);
    }

    updateUserDetails = (formData) => {        
        return axios.post(`${this.API_URL}/user/update`, formData, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getNews = (params) => {
        return axios.get(`${this.API_URL}/news?time=${params.time}&page=${params.page}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getCompetitions = () => {
        return axios.get(`${this.API_URL}/competitions`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
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

    getPlayers = () => {
        return axios.get(`${this.API_URL}/players`, {
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

    bookmarkArticle = (id) => {
        return axios.post(`${this.API_URL}/news/${id}/toggle_bookmark`, null, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    addDashboard = (params) => {
        return axios.post(`${this.API_URL}/user/dashboards`, params, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    deleteDashboard = (id) => {
        return axios.delete(`${this.API_URL}/user/dashboards/${id}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getDashboards = () => {
        return axios.get(`${this.API_URL}/user/dashboards`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    saveToken(token) {    
        
        this.token = token;
    }

    destroyToken() {
        localStorage.removeItem('store');
        this.token = undefined;
        window.location.reload(true);
    }

    getToken() {
        return this.token;
    }
}

const api = new Api();

export default api;