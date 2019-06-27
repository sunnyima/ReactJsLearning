import  axios from "axios";

export function fetchTweets() {
    return function (dispatch) {
        dispatch({type:"FETCH_TWEETS"});
        axios.get("http://rest.learncode.academy/api/reacttest/tweets")
            .then((response)=>{
                dispatch({
                    type: "FETCH_TWEETS_FULFILLED", payload:[
                        {id:1, text: 'Lorem ipsum dolor sit amet.'},
                        {id:2, text: 'Lorem ipsum dolor sit amet, consectetur.'}
                    ]
                })
            })
            .catch((err)=>{
                dispatch({type:"FETCH_TWEETS_REJECTED", payload: err})
            })
    }
}

export function addTweet(id, text) {
    return{
        type: "ADD_TWEET",
        payload:{
            id,
            text
        }
    }
}