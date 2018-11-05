import React from 'react';

const Card = (props) => {
    const background = {
        backgroundImage: `url(${props.value})`
    }

    return (

        <div className="grid-item" style={background}>
        </div>
    )
} 

export default Card;