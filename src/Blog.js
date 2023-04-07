import React from 'react';
import PropTypes from 'prop-types';

export default function Blog(props) {
  return (

    <>
          Likes: {props.likes}

        <article>
         <strong> Name: </strong>{props.post.name}<br />
         <strong> lastName: </strong>{props.post.lastName}
        </article>
        <button onClick={() => props.onRemove(props.post.id)}>Remove</button>
        
        <hr />
    </>
  )
}

Blog.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
}
