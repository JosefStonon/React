import React from "react";
import PropTypes from 'prop-types';

import Button from "./Button";

export default function PostHead(props) {
  return (

    <>
        <strong>
          {props.post.read && <s>{props.post.name}</s>}
          {!props.post.read && props.post.name}
        </strong>
          <br />
        <article>
          Likes: {props.post.likes}
          <br />
          Name: {props.post.name}
          <br />
          lastName: {props.post.lastName}
          <br />

          <Button onClick={() => props.onRemove(props.post.id)}>Delete</Button>
          {props.children}
          <hr />
        </article>

    </>
  )
}

PostHead.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  })

}