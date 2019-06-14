import React from 'react';
import PropTypes from 'prop-types';

class ButtonItem extends  React.Component{
    render(){
        return(
            <button>{this.props.buttonText}</button>
        );
    }
}
export default ButtonItem;