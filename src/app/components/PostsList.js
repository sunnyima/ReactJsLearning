import React, {Component} from 'react';
import axios from 'axios';
import Posts from "../pages/Posts";
import Post from "./Post";

export default class PostsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
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
                <h1>Посты</h1>
                {posts}
            </div>
        );
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                this.setState( {posts: response.data});
            });
    }
}
