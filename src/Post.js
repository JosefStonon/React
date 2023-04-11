import React from "react";
import PropTypes from 'prop-types';

import PostHeader from './PostsHeader';


export default function Post(props) {
  return (
    <>
       <article>
        <PostHeader 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            name: props.post.name,
            read: props.post.read,
            likes: props.post.likes
          }} 
        />
       </article>

    </>
  )
}

Post.proptypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}