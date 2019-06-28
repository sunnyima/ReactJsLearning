import React, { Component } from 'react';
import UserProfile from '../components/User';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return (
            <div>
                {this.state.user && <UserProfile {...this.state.user} />}
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

export default connect(mapStateToProps)(User);
