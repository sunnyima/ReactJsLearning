import React, { Component } from 'react';
import  { getUsers } from '../actions/userActions';
import store from '../stores/userStore';
import UsersList from '../components/UsersList';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.onUserChange = this.onUserChange.bind(this);
    }

    onUserChange() {
        this.setState({ users: store.users });
    }

    componentDidMount() {
        getUsers();
        store.on('change', this.onUserChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onUserChange);
    }

    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<UsersList  users={this.state.users}/>)
                        :
                        (this.props.children)
                }
            </div>
        )
    }
}


/*
import React, {Component} from 'react';

import UsersList from '../components/UsersList';
export default class Users extends Component {
    render() {
        return(
            <div>
                {
                    (!this.props.children) ?
                        (<UsersList/>)
                        :
                        (this.props.children)
                }
            </div>
        );
        <UsersList/>;
    }
}

*/
