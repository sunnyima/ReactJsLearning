import React, {Component} from 'react';
import {Link} from "react-router";
import {addPost, getPosts} from "../actions/postActions";
import store from '../stores/postStore';

export default class Post extends Component {

    componentDidMount() {
        getPosts();
    }

    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${this.props.id}`}>{this.props.title}</Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}
