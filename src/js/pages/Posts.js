import React, { Component } from 'react';
import PostsList from '../components/PostsList';
import { connect } from 'react-redux';

class Posts extends Component {
    render() {
        return (
            <div>
                {/*<button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>*/}
                {
                    (!this.props.children) ?
                        (<PostsList  posts={this.state.tweets.tweets}/>)
                        :
                        (this.props.children)
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return{
        user: state.user.user,
        users: state.users.users,
        tweet: state.tweet.tweet,
        tweets: state.tweets.tweets
    }
}

export default connect(mapStateToProps)(Posts);
