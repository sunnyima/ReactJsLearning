import React, {Component} from 'react';
import PostInfo from '../components/Post';

import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div>
                {this.state.tweet && <PostInfo {...this.state.tweet} />}
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
