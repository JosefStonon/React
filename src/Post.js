import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {

  return (
    <>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        {props.children}
        <hr />
        

    </>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}