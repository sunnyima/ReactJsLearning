import React from 'react';
import ReactDOM from 'react-dom';
import {classDeveloper} from './Developer';

const I = new classDeveloper('Marina', 'Khokkonen');

class App extends React.Component{
    render() {
        return <div>
            <h1>My First React App</h1>
            <p>Developer: {I.name} {I.surname}</p>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));