import React from 'react';
import ReactDOM from 'react-dom';
import {classDeveloper} from './Developer';

import Menu from './Menu';
import Login from './Login'

const I = new classDeveloper('Marina', 'Khokkonen');

class App extends React.Component{
    render() {
        const menuItems =[
            {href:'/', title:'Главная'},
            {href:'/about', title:'О нас'},
            {href:'/service', title:'Услуги'},
            {href:'/contacts', title:'Контакты'}

        ];
        return <div>
            <h1>Первое приложение на ReactJS</h1>
            <p>Developer: {I.name} {I.surname}</p>
            <Menu items = {menuItems} titleMenu="Меню навигации"/>
            <Login titleForm = 'Войти в свой аккаунт :'/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));