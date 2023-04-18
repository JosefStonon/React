import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import Title from '../Title';



import { ThemeContext } from '../../context/ThemeContext';

export default function Header(props) {

  const { onToggleTheme } = useContext(ThemeContext);

  return (

    <>
        <Title>{props.title}</Title>
   
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

    </>
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

