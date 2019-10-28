import React from 'react';
import { connect } from 'react-redux';

function SmurfDisplay(props) {
    console.log(props)
    return (
        <div className='smurf-box'>
            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
            <h4>{props.height}</h4>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        name: state.smurf.name,
        age: state.smurf.age,
        height: state.smurf.height
    }
}

export default connect(
    mapStateToProps
)(SmurfDisplay);