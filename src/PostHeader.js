import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";


export default function PostHeader(props) {
    
  return (

    <>

          <article>
            <strong> Name: </strong>{props.post.name}<br />
            <strong> lastName: </strong>{props.post.lastName}
          </article>

          <Button
            theme={props.theme}
            onClick={() => props.onRemove(props.post.id)}>
            Remover
          </Button>
    </>
  )
}

PostHeader.propTypes = {
  theme: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
}