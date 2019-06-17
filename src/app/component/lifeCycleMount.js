import React, {Component} from "react";

export default class LifeCycleMount extends Component{
    constructor(props){
        console.log('1 constructor(props)');
        super(props);

    }
    static getDerivedStateFromProps(props, state){
        console.log('2 getDerivedStateFromProps(props, state)');
        return{
            hello:'hello'
        }
    }
    render() {
        console.log('3 render() ');
        return(
            <div>
                LifeCycleMount
            </div>
        );
    }

    componentDidMount() {
        console.log('4 componentDidMount()');
    }
}
