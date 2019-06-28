import React, { Component } from 'react';
import PostItem from './Post';
import {fetchTweets} from '../actions/tweetsActions';

export default class PostsList extends Component {
    fetchTweets(){
        this.props.dispatch(fetchTweets());
    }
    render() {
        const {user, tweets} = this.props;

        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)}>Загрузить твиты</button>
        }
        const mappedTweets = tweets.map(tweet => <PostItem key={tweet.id} {...tweet}/>);
        return (
            <div>
                <h1>Посты</h1>
                <div>
                    {mappedTweets}
                </div>
            </div>
        )
    }
}

