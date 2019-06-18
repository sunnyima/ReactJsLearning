import React, {Component} from 'react';

export default class WelcomeModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: this.props.modal
        };
        this.close = this.close.bind(this);
    }

    close(){
        this.setState({
            modal: false
        });
        this.props.onCloseModal();
    }

    render()
    {
        return (<div className="modalContent">
            <h2>Hello!</h2>
            <hr/>
            <button className="modalContentButton" onClick={this.close}>Close</button>
        </div>);
    }
    componentDidMount() {
        this.setState({modal: false});
    }
}

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