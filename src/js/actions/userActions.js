export  function fetchUser(id) {
    return function (dispatch) {
        dispatch({type:"FETCH_USER"});
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                dispatch({
                    type: "FETCH_USER_FULFILLED", payload:[
                        {user: response.data}
                    ]
                })
            })
            .catch((err)=>{
                dispatch({type:"FETCH_USER_REJECTED", payload: err})
            })
    };
}

export function setUserName(name) {
    return{
        type: "SET_USER_NAME",
        payload: name
    }
}

export   function setUserAge(age) {
    return{
        type: "SET_USER_AGE",
        payload: age
    }

}