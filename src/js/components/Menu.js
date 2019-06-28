import React, {Component} from 'react';
import {Link} from "react-router";

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className= "navbar-brand">{this.props.brand}</Link>
                    <div className="navbar-collapse">
                        <ul className="nav">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
