export  default function reducer(state={
    tweet:{
        userId:null,
        id: null,
        title: null,
        body: null
    },
    fetching : false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_TWEET":{
            return{...state, fetching: true}
        }
        case "FETCH_TWEET_REJECTED":{
            return {...state, fetching:false, error: action.payload}
        }
        case "FETCH_TWEET_FULFILLED":{
            return {
                ...state,
                fetching: false,
                fetched: true,
                tweet: action.payload
            }
        }
    }
    return state;
}