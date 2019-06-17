import React, {Component} from "react";

export default class LifeCycleUnmount extends Component{

    render() {
        return(
            <div>
                лишний компонент
            </div>
        );
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}