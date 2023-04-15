import React from "react";
import PropTypes from 'prop-types';

import PostHead from "./PostsHeader";


export default function Post(props) {
  return (
    <>
        <PostHead 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            likes: props.post.likes,
            name: props.post.name,
            lastName: props.post.name,
            read: props.post.read
          }}
        />
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })

}