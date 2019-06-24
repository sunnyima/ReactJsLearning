import React, {Component} from 'react';
import PostStore from "../stores/postStore";
import Post from "./Post";
import {getPosts, addPost} from "../actions/postActions";

export default class PostsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        this.onPostChange = this.onPostChange.bind(this);
        this.newPost = this.newPost.bind(this);
    }
    onPostChange() {
        this.setState({posts: PostStore.posts});
    }
    newPost(){
        const title = 'Lorem ipsum dolor sit amet.';
        const userId = 11;
        const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto natus totam? Harum incidunt ' +
            'placeat quae. Consectetur id optio praesentium.';
        addPost(title, userId, body);
        //this.setState({posts: PostStore.posts});
    }
    render() {
        if(!this.state.posts.length){
            return null;
        }
        const  posts = this.state.posts.map((post, index)=>{
            return <Post key={index} {...post}/>
        });
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
                <h1>Посты</h1>
                {posts}
            </div>
        );
    }
    componentDidMount() {
        getPosts();
        PostStore.on('change', this.onPostChange);
    }
    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }
}
