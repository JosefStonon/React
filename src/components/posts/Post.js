import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "../../components/posts/PostsHeader";

import Button from "../Button";

import { Container, Subtitle, Rate } from "./styles";

export default function Post(props) {
  return (


          <Container removed={props.removed}>
              <PostHeader 
                post={{
                  id: props.post.id,
                  likes: props.post.likes,
                  name: props.post.name,
                  lastName:props.post.lastName,
                  read: props.post.read,


                }}
              />

           
              <Subtitle>{props.post.lastName}</Subtitle>
           
              <Rate>Likes: {props.post.likes}</Rate>
              
              <Button
                onClick={() => props.onRemove(props.post.id)}
              >
                Delete
              </Button>
            <hr />
          </Container>

  )
}

Post.prototype = {
  removed: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  })

}