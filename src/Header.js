import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import { ThemeContext } from './ThemeContext';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);


  return (

    <>
        <article>
          <h1>{props.title}</h1>
          <Button onClick={onToggleTheme}>
            Mudar tela
          </Button>
          <h3>{props.subtitle}</h3>
        </article>
        {props.children}

        <hr />
    </>
  )
}

Header.proptypes = {
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'JStack Blog',
  subtitle: 'New Blog'
}