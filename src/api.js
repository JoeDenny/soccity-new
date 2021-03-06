import axios from 'axios';

class Api {
    token = undefined;
    API_URL = 'https://c.sourcebuffet.net/api';

    login = (formData) => {        
        return axios.post(`${this.API_URL}/login`, formData);
    }

    anonymousLogin = () => {        
        return axios.post(`${this.API_URL}/login_anonymous`, {});
    }

    register = (formData) => {        
        return axios.post(`${this.API_URL}/register`, formData);
    }

    getStripeConfig = () => {
        return axios.get(`${this.API_URL}/config`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getUser = (accessToken) => {
        return axios.get(`${this.API_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }

    subscribe = (token, email, plan) => {
        const params = {
            stripeToken: token.id,
            stripeEmail: email,
            plan: plan
        }
        return axios.post(`${this.API_URL}/subscribe`, params, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    updateUserDetails = (formData) => {        
        return axios.post(`${this.API_URL}/user/update`, formData, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    saveSubscription = (subscription) => {     
        
        let params = {};
        params.preferences = {};
        params.preferences.notification_subscription = subscription;    
        
        return axios.post(`${this.API_URL}/user/update`, params, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getCustomNews(type, id, params) {
        const url = `time=${params.time}&page=${params.page}&${type}[]=${id}`

        return axios.post(`${this.API_URL}/news?${url}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });        
    }

    getNews = (params) => {

        return axios.post(`${this.API_URL}/news`, params, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    openArticle = (id) => {
        return axios.get(`${this.API_URL}/news/${id}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getDefaultAvatars = () => {
        return axios.get(`${this.API_URL}/default_avatars`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getPopularNews = () => {

        return axios.get(`${this.API_URL}/news/popular`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getLatestComments = () => {
        return axios.get(`${this.API_URL}/comments/latest`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getRecentlyViewed = () => {
        return axios.get(`${this.API_URL}/user/seen`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getFollowers = () => {
        return axios.get(`${this.API_URL}/user/followers`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    getFollowings = () => {
        return axios.get(`${this.API_URL}/user/followings`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    toggleFollow = (user) => {
        return axios.post(`${this.API_URL}/user/${user}/toggle_follow`, {}, {
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
    
    getTeams = (id) => {

        if(id) {
            return axios.get(`${this.API_URL}/teams?competition_id=${id}`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        } else {
            return axios.get(`${this.API_URL}/teams`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
    
    }

    getPlayers = (id) => {

        if(id) {
            return axios.get(`${this.API_URL}/players?team_id=${id}`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        } else {

            return axios.get(`${this.API_URL}/players`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
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

    getCommonKeywords = (type, id) => {

        return axios.get(`${this.API_URL}/keywords?${type}=${id}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    addCustomTwitterAccount = (type, name) => {
        return axios.post(`${this.API_URL}/user/add_twitter`, { type, name }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    addComment = (id, comment, parent_id) => {

        return axios.post(`${this.API_URL}/news/${id}/comments`, { comment, parent_id }, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }

    findUsers = (username) => {
        
        return axios.get(`${this.API_URL}/users?query=${username}`, {
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

    updateDashboard = (id, params) => {
        
        return axios.put(`${this.API_URL}/user/dashboards/${id}`, params, {
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

    searchTeams = (term) => {
        return axios.get(`${this.API_URL}/teams?query=${term}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }
    searchCompetitions = (term) => {
        return axios.get(`${this.API_URL}/competitions?query=${term}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }
    searchPlayers = (term) => {
        return axios.get(`${this.API_URL}/players?query=${term}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });
    }
    searchSources = (term) => {
        return axios.get(`${this.API_URL}/sources?query=${term}`, {
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