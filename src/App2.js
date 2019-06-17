import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import  LifeCycleMount from './app/component/lifeCycleMount';
import  LifeCycleUpdate from './app/component/lifeCycleUpdate';
import  LifeCycleUnmount from './app/component/lifeCycleUnmount';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            showUnmountComponent : true
        }
    }
    render() {
        return <div>
            {this.state.showUnmountComponent ? <LifeCycleUpdate/> : null }
            <button onClick={()=>{
                this.setState({showUnmountComponent:false})
            }}>DELETE</button>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
