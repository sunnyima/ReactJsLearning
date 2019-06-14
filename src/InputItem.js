import React from 'react';
import PropTypes from 'prop-types';

class InputItem extends  React.Component{
    render(){
        return(
            <div>
                <p>{this.props.inputText} :</p>
                <input type={this.props.inputType}/>
            </div>
        );
    }
}
export default InputItem;