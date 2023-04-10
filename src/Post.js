import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from './ThemeContext';

export default function Post(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Button onClick={onToggleTheme}>
          Mudar o tema
        </Button>
        {props.children}
        <hr />
        

    </>
  )
}

Post.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Post.defaultProps = {
  title: `JStack's Blog`,
  subtitle: `New Blog`
}