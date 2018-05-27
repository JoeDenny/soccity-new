import { Component } from 'react';
import queryString from 'query-string';
import { routes } from '../constants';
import { getUser } from '../actions';
import { connect } from 'react-redux';

class SocialLogin extends Component {

    componentWillReceiveProps(newProps) {
        
        if (newProps.token) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    componentWillMount() {
        let accessToken = queryString.parse(this.props.location.search).accessToken;

        if(accessToken) {
            this.props.getUser(accessToken);
        }
        
    }

    render() {
        return false;
    }
}

const mapStateToProps = (state) => ({
    token: state.token,  
});

const mapDispatchToProps = (dispatch) => ({
    getUser: (accessToken) => dispatch(getUser(accessToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);
