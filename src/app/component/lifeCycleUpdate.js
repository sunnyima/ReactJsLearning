import React, {Component} from "react";

export default class LifeCycleUpdate extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('2 getDerivedStateFromProps(props, state)');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        return(
            <div>
                {this.state.count}
                <button onClick={()=>{
                    this.setState({count: this.state.count + 1});
                }}> Увеличить счетчик</button>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
}