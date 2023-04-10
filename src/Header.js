import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function Header(props) {

  console.log(props.theme)
  return (

    <>
        <article>
          <h1>{props.title}</h1>
          <Button theme={props.theme} onClick={props.onToggleTheme}>Mudar tela</Button>
          <h3>{props.subtitle}</h3>
        </article>
        {props.children}

        <hr />
    </>
  )
}

Header.proptypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'JStack Blog',
  subtitle: 'New Blog'
}