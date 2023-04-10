import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


export default function PostHeader(props) {
  return (
    <>
        <strong>
          {props.post.read && <s>{props.post.name}</s>}
          {!props.post.read && props.post.name}
        </strong>
            <article>
              Likes: {props.post.likes}
              <br />
              <strong>Name: </strong> {props.post.name}
              <br />
              <strong>LastName: </strong> {props.post.lastName}
              <br />
              <Button 
              theme={props.theme}
              onClick={() => props.onRemove(props.post.id)}>
                Remove
              </Button>
              {props.children}
              <hr />
            </article>


        
    </>
  )
}

PostHeader.proptypes = {
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}