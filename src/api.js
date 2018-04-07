import axios from 'axios';
import * as moment from 'moment';


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

    getAllNews = () => {
    
        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss')
        }; 

        return axios.get(`${this.API_URL}/news?time=${params.time}`, {
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