import React from 'react';
import PropTypes from 'prop-types';


export default function Body(props) {
    return (

        <>
            <hr />
            <strong>Likes: {props.likes}</strong>
            <article>
                name: {props.post.name}
                <br />
                Last name: {props.post.lastName}
            </article>
            <hr />

        </>
    )
}

Body.propTypes = {
    likes: PropTypes.number.isRequired,
    Body: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }).isRequired,
}


