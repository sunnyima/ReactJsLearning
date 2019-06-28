import React, { Component } from 'react';
import PostItem from './PostItem';

export default class PostsList extends Component {
    render() {
        const posts = this.props.posts.map(post=> <PostItem key={post.id} {...post} />);
        return (
            <div>
                <h1>Посты</h1>
                <div>
                    {posts}
                </div>
            </div>
        )
    }
}



