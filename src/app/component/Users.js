import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: this.props.items
        }
        this.addUser = this.addUser.bind(this);
        this.myRef = React.createRef();
    }

    addUser(){
        const userName = this.myRef.current.value;
        const users = [...this.state.users, userName];
        this.setState({
            users
        });
        this.myRef.current.value = '';

    }

    render() {

        const users = this.state.users.map((user, index) =>{
            return <li key={index}>{user}</li>
        });

        return(
            <div>
                <ul>
                    {users}
                </ul>
                <label>
                    Ввведите имя пользователя <input ref={this.myRef} type="text" placeholder="Имя"/>
                </label>
                <button  onClick={this.addUser}> Добавить пользователя</button>
            </div>
        );
    }
}

