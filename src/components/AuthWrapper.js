import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../constants';

class AuthWrapper extends Component {
    componentWillMount() {
                
        if (!this.props.token) {
            this.props.history.push(routes.LOGIN_PATH);
        }
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.token) {
            this.props.history.push(routes.LOGIN_PATH);
        }
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = (state) => ({
    token: state.token
});

export default connect(mapStateToProps)(withRouter(AuthWrapper));