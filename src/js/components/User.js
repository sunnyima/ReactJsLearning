import React, {Component} from 'react';
import {Link} from "react-router";
import {fetchUser} from '../actions/userActions';

export default class User extends Component {
    fetchUser(){
        this.props.dispatch(fetchUser(this.props.params.userId));
    }
    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.email}</p>
                    <p>{this.props.user.phone}</p>
                    <p>{this.props.user.website}</p>
                </div>
            </div>
        )
    }
}
