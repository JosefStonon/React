import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "./PostsHeader";

import Button from "./Button";

import styles from './Post.scss';

export default function Post(props) {
  return (


          <article 
            className={
              props.post.removed
                ? styles.postDeleted
                : styles.post
            }
          >
              <PostHeader 
                post={{
                  id: props.post.id,
                  likes: props.post.likes,
                  name: props.post.name,
                  lastName:props.post.lastName,
                  read: props.post.read,

                }}
              />
              
              <Button
                onClick={() => props.onRemove(props.post.id)}
              >
                Delete
              </Button>
            <hr />
          </article>

  )
}

Post.prototype = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired
  })

}