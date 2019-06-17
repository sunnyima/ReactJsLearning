import React, {Component} from 'react';

import Post from './Post';

export default class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.items
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('update');
        return true;
    }



    render() {
        const posts = this.state.posts.map((post, index) =>{
            return <Post item={post} key={index} type='post'/>
        });

        return(
            <div>
                <ul>
                    {posts}
                </ul>
                <Post items={this.state.posts}  type='button'/>
            </div>
        );
    }
}
