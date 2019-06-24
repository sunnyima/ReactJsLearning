import React, {Component} from 'react';

export default class Contacts extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Контакты</h1>
                <p>Добро пожаловать</p>
                <p>{this.props.match.params.number}</p>
            </div>
        );
    }
}

