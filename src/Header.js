import React, { useContext } from "react";
import PropTypes from 'prop-types';

import Button from "./Button";

import styles from './Header.css';

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {

  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div
      
    >
      <h1 className={styles.title}>{props.title}</h1>
      <h3 className={styles.subtitle}>{props.subtitle}</h3>
      <Button
        onClick={onToggleTheme}
      >Mudar tema</Button>
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
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: 'JStack Devops',
  subtitle: 'New Blog'
}
