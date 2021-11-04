import React from 'react'

const index = ({name, image, key}) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <img src={image} alt={name} />
        </div>
    )
}

export default index
