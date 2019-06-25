import React, { Component } from 'react';
import  { getUser } from '../actions/userActions';
import store from '../stores/userStore';
import UserProfile from '../components/User';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.onUserChange = this.onUserChange.bind(this);
    }

    onUserChange() {
        this.setState({ user: store.user });
    }

    componentDidMount() {
        getUser(this.props.params.userId);
        store.on('change', this.onUserChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onUserChange);
    }

    render() {
        return (
            <div>
                {this.state.user && <UserProfile {...this.state.user} />}
            </div>
        )
    }
}
