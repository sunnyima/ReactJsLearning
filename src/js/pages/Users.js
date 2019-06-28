import React, { Component } from 'react';
import UsersList from '../components/UsersList';
import { connect } from 'react-redux';

class Users extends Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<UsersList  users={this.state.users}/>)
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

export default connect(mapStateToProps)(Users);
