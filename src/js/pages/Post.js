import React, {Component} from 'react';
import PostItem from '../components/PostItem';
import {fetchTweet} from '../actions/tweetActions';
import {connect} from "react-redux";

class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchTweet(this.props.params.postId));
    }

    render() {
        return (
            <div>
                {this.props.tweet && <PostItem {...this.props.tweet} />}
            </div>
        );
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

export default connect(mapStateToProps)(Post);

