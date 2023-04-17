import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import style from './Header.scss';

import { ThemeContext } from './ThemeContext';

export default function Header(props) {

  const { onToggleTheme } = useContext(ThemeContext);

  return (

    <div className={style.title}>
        <h1>{props.title}</h1>
   
        <h3>{props.subtitle}</h3>

        <Button
          onClick={onToggleTheme}
        >
          Mudar tema
        </Button>
          <br />
          <br />

        {props.children}

        <br />
        <hr />
        <hr />

    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'JStack Devops',
  subtitle: 'New Blog'
}

