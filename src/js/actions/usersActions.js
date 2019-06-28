import  axios from "axios";

export function fetchUsers() {
    return function (dispatch) {
        dispatch({type:"FETCH_USERS"});
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                dispatch({
                    type: "FETCH_USER_FULFILLED", payload:[
                        {users: response.data}
                    ]
                })
            })
            .catch((err)=>{
                dispatch({type:"FETCH_USER_REJECTED", payload: err})
            })
    }
}
