import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/component/Blog';
import WelcomeModal from './app/component/WelcomeModal';

const  POSTS =[{
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quis.',
            postBody : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet aperiam atque dicta dolorem earum est harum, ipsum laudantium maxime officiis quibusdam rerum ullam! Autem culpa deserunt minima mollitia perferendis!'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, mollitia?',
            postBody : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet aperiam atque dicta dolorem earum est harum, ipsum laudantium maxime officiis quibusdam rerum ullam! Autem culpa deserunt minima mollitia perferendis!'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            postBody : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet aperiam atque dicta dolorem earum est harum, ipsum laudantium maxime officiis quibusdam rerum ullam! Autem culpa deserunt minima mollitia perferendis!'
        },
        {
            title: 'Lorem ipsum dolor sit amet.',
            postBody : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet aperiam atque dicta dolorem earum est harum, ipsum laudantium maxime officiis quibusdam rerum ullam! Autem culpa deserunt minima mollitia perferendis!'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            postBody : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet aperiam atque dicta dolorem earum est harum, ipsum laudantium maxime officiis quibusdam rerum ullam! Autem culpa deserunt minima mollitia perferendis!'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae!',
            postBody : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, amet aperiam atque dicta dolorem earum est harum, ipsum laudantium maxime officiis quibusdam rerum ullam! Autem culpa deserunt minima mollitia perferendis!'
        },
];

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            modal : true
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({modal: false});
    }
    render() {
        return <div>
            {this.state.modal ? <WelcomeModal modal={this.state.modal} onCloseModal={this.handleClose}/> : null }
            <Blog items={POSTS}  className="Blog" />
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
