import React from "react";
import PropTypes from 'prop-types';

export default function PostHeader(props) {
  return (
     <>
        <article>
          <strong>
            {props.post.read && <s>{props.post.name}</s>}
            {!props.post.read && props.post.name}
          </strong>
          
          <br />
          Likes: {props.post.likes}
          <br />
          Name: {props.post.name}
          <br />
          LastName: {props.post.lastName}
        </article>
        <br />
        {props.children}  

  



     </>
  )
}

PostHeader.proptypes = {
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  })
}