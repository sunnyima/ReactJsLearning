import React, { Component } from 'react';
import PostsList from '../components/PostsList';
import {fetchTweets} from '../actions/tweetsActions';
import {connect} from "react-redux";


class Posts extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(fetchTweets());
    }


    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<PostsList  posts={this.props.tweets}/>)
                        :
                        (this.props.children)
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        user: state.user.user,
        users: state.users.users,
        tweet: state.tweet.tweet,
        tweets: state.tweets.tweets
    }
}

export default connect(mapStateToProps)(Posts);

