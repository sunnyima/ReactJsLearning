import React, {Component} from 'react';

import Post from './Post';
import LifeCycleUnmount from "./lifeCycleUnmount";
import LifeCycleUpdate from "./lifeCycleUpdate";

export default class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.items,
            newPost : this.props.newPost
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('update');
        console.log(this.state.newPost);
        if(nextProps.newPost === true)
        {
            this.setState({newPost : nextProps.newPost});
        }
        console.log(this.state.newPost);
        return this.state.newPost;
    }



    render() {
        this.setState({newPost : false});
        const posts = this.state.posts.map((post, index) =>{
            return <Post item={post} key={index} type='post'/>
        });

        return(
            <div>
                <ul>
                    {this.state.newPost ? {posts}: null}
                </ul>
                <Post items={this.state.posts}  newPost={this.state.newPost} type='button'/>
            </div>
        );
    }
}
