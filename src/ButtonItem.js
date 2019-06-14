import React from 'react';
import PropTypes from 'prop-types';

class InputItem extends  React.Component{
    render(){
        return(
            <div>
                <p>{this.props.text} :</p><br/>
                <input type={this.props.type}/>
            </div>
        );
    }
}
export default InputItem;