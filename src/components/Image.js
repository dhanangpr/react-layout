import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src, alt }) => {
    return (
        <div className="card-header">
            <img src={src} alt={alt} width="200px" height="200px"/>
        </div>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default Image;