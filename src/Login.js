import React from 'react';
import InputItem from './InputItem';
import ButtonItem from './ButtonItem'

class Login extends  React.Component{
    render() {
        return (
            <form>
                <h2>{this.props.titleForm}</h2>
                <InputItem inputType="text" inputText="Login"/>
                <InputItem inputType="password" inputText="Password"/>
                <ButtonItem buttonText="Log In"/>
            </form>
        );
    }
}

export default Login;