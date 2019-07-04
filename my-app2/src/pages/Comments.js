import React, {useState, useEffect}  from 'react';
import CommentsList from '../components/CommentsList';
import axios from 'axios';
const Comments = props=> {
        const [commentsData, setComments] = useState([]);

        useEffect(()=> {
            axios.get("http://jsonplaceholder.typicode.com/comments/")
                .then(result => {
                    const comments = result.data;
                    setComments(comments);
                });
        });

        return <CommentsList comments={commentsData} />
};

export default Comments;