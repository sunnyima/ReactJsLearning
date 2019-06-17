import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Users from './app/component/Users';

const  USERS =['Anna', 'Victor', 'Olga','Anton'];


ReactDOM.render(<Users items={USERS}/>, document.getElementById('root'));
