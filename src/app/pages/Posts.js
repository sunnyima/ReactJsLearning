import React, { Component } from 'react';
import { addPost, getPosts } from '../actions/postActions';
import store from '../stores/postStore';
import PostsList from '../components/PostsList';

export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.onPostChange = this.onPostChange.bind(this);
        this.newPost = this.newPost.bind(this);
    }

    newPost() {
        const title = 'Lorem ipsum dolor sit amet.';
        const userId = 1;
        const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet labore nihil possimus provident sit voluptate.';
        addPost(title, userId, body);
    }

    onPostChange() {
        this.setState({ posts: store.posts });
    }

    componentDidMount() {
        getPosts();
        store.on('change', this.onPostChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onPostChange);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
                {
                    (!this.props.children) ?
                        (<PostsList  posts={this.state.posts}/>)
                        :
                        (this.props.children)
                }
            </div>
        )
    }
}
