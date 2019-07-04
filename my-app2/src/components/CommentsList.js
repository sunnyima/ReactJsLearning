import React from 'react';
import Comment from './Comment';

const CommentsList = props=>{

    const { comments } = props.comments;

    if (!comments.length) {
      return null;
    }

    const commentsList = comments.map((comment, index) => {
      return <Comment key={index} {...comment}/>
    }) ;

    return (
      <>
        <h1>Комментарии</h1>
        {commentsList}
      </>
    );
};


export default CommentsList;