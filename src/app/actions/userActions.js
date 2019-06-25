import dispatcher from '../dispatcher';
import axios from 'axios';


export function  getUsers() {
    axios
        .get('https://jsonplaceholder.typicode.com/users/')
        .then(response =>{
            dispatcher.dispatch({
                type: 'GET_USERS',
                data: response.data
            });
        });
}

export function  getUser(id) {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response =>{
            dispatcher.dispatch({
                type: 'GET_USER',
                data: response.data
            });
        });
}