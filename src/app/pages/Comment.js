import React, {Component} from 'react';
import axios from 'axios';
import CommentInfo from '../components/Comment';
export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state ={
            comment : null
        }
    }
    render() {
        return (
            <div>
                {this.state.comment && <CommentInfo {...this.state.comment} />}
            </div>
        );
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then(response =>{
                this.setState({comment: response.data})
            })
    }
}
