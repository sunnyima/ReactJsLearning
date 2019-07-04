import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import CommentProfile from '../components/Comment';

const Comment = props => {
    const [commentData, setComment] = useState({});

    useEffect(()=> {
        axios.get("http://jsonplaceholder.typicode.com/comments/" + props.match.params.commentId)
            .then(result => {
                const comment = result.data;
                setComment(comment);
            });
    });

    return (
        <div>
            { commentData && <CommentProfile { ...commentData }/>}
        </div>
        );
};

export default Comment;