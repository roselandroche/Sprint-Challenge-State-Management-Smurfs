import React from 'react';
import { connect } from 'react-redux';

function SmurfDisplay(props) {
    console.log(props)
    return (
        <div className='smurf-box'>
            <h3>{props.item.name}</h3>
            <h4>{props.item.age}</h4>
            <h4>{props.item.height}</h4>
        </div>
    )
}

export default SmurfDisplay;