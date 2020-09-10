import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  width:200px;
  height:200px;
`;

const Image = ({src, alt}) => {
    return (
        <div className="card-header">
            <StyledImage src={src} alt={alt}/>
        </div>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default Image;