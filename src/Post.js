import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Post(props) {

  return (
    <>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Button theme={props.theme} onClick={props.onToggleTheme}>
          Mudar o tema
        </Button>
        {props.children}
        <hr />
        

    </>
  )
}

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Post.defaultProps = {
  title: `JStack's Blog`,
  subtitle: `New Blog`
}