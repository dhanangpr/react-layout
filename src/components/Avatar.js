import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 10px;
`;

const Avatar = ({src, alt }) => {
    return (
        <StyledAvatar src={src} alt={alt} />
    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default Avatar;