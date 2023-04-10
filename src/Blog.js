import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';


export default function Blog(props) {
  return (

    <>
          
          Likes: {props.likes}
          <PostHeader
            theme={props.theme}
            onRemove={props.onRemove}
            post={{
              id: props.post.id
            }}
          />
        
        <hr />
    </>
  )
};

Blog.proptype = {
  theme: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
      id: PropTypes.number.isRequired
    })
}


