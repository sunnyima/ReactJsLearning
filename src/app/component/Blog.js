import React, {Component} from 'react';

import {Post, AddPost} from './Post';

export default class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.items
        };
        this.handleAddPost = this.handleAddPost.bind(this);
    }

    handleAddPost(posts) {
        this.setState({posts: posts});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }
    render() {
        const posts = this.state.posts.map((post, index) =>{
            return <Post item={post} key={index}/>
        });

        return(
            <div className="App">
                <ul className="Posts">
                    {posts}
                </ul>
                <AddPost items={this.state.posts} count={this.state.count} onAddPost={this.handleAddPost}/>
            </div>
        );
    }
}
