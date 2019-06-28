import React, {Component} from 'react';
import {Link} from "react-router";
import {fetchTweet} from '../actions/tweetActions';

export default class Post extends Component {
    fetchTweet(){
        this.props.dispatch(fetchTweet(this.props.params.postId));
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
