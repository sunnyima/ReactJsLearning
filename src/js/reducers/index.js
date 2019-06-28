import {combineReducers} from "redux";

import  tweets from './tweetsReducer';
import  user from './userReducer';
import  users from './usersReducer';
import  tweet  from './tweetReducer';
export default combineReducers({
    tweet,
    tweets,
    user,
    users
})