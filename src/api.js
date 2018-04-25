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

        const requestParams = this.createGetNewsUrl(params);

        return axios.get(`${this.API_URL}/news?${requestParams}`, {
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

    createGetNewsUrl(params) {
        let teamsUrl = '',
            competitionsUrl = '',
            playersUrl = '';

        let sourceTypeUrl = params.source_type ? `&source_type=${params.source_type}` : '';

        if(params.teams) {
            for(let i=0; i < params.teams.length; i++) {
                teamsUrl += `&teams[]=${params.teams[i].id}`;
            }
        } else if(params.competitions) {
            for(let i=0; i < params.competitions.length; i++) {
                competitionsUrl += `&competitions[]=${params.competitions[i].id}`;
            }
        } else if(params.players) {
            for(let i=0; i < params.players.length; i++) {
                playersUrl += `&players[]=${params.players[i].id}`;
            }
        }

        let url = `time=${params.time}&page=${params.page}${sourceTypeUrl}${teamsUrl}${competitionsUrl}${playersUrl}`;

        return url;
    }
}

const api = new Api();

export default api;