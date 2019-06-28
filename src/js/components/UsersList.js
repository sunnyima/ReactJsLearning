import React, {Component} from 'react';
import UserProfile from "./User";
import {fetchUsers} from '../actions/usersActions'

export default class UsersList extends Component {
    fetchUsers(){
        this.props.dispatch(fetchUsers());
    }
    render() {
        if(!this.props.users.length){
            return <button onClick={this.fetchUsers.bind(this)}>Загрузить пользователей</button>
        }
        const mappedUsers = this.props.users.map(user => <UserProfile key={user.id} {...user}/>);
        return (
            <div>
                <h1>Пользователи</h1>
                <div>
                    {mappedUsers}
                </div>
            </div>
        )
    }
}
