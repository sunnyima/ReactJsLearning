import React, {Component} from 'react';

import PostsList from '../components/PostsList';

export default class Posts extends Component {
    render() {
        /*if(!this.props.posts.length)
        {
            return  null;
        }*/
        return(
            <div>
                {
                    (!this.props.children) ?
                        (<PostsList/>)
                        :
                        (this.props.children)
                }
            </div>
        );
        <PostsList/>;
    }
}