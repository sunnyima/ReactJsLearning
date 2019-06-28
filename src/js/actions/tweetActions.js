export  function fetchTweet(id) {
    return function (dispatch) {
        dispatch({type:"FETCH_TWEET"});
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                dispatch({
                    type: "FETCH_TWEET_FULFILLED", payload:[
                        {tweet: response.data}
                    ]
                })
            })
            .catch((err)=>{
                dispatch({type:"FETCH_TWEET_REJECTED", payload: err})
            })
    };
}