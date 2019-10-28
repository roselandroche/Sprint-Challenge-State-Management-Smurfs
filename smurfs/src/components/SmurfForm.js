import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/smurf';

function SmurfForm(props) {
    const [smurfName, addSmurfName] = useState('');
    const [smurfAge, addSmurfAge] = useState();
    const [smurfHeight, addSmurfHeight] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurf()

        addSmurfName('')
        addSmurfAge('')
        addSmurfHeight('')
    }

    const handleNameChange = (event) => {
        addSmurfName(event.target.value)
    }

    const handleAgeChange = event => {
        addSmurfAge(event.target.value)
    }

    const handleHeightChange = event => {
        addSmurfHeight(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='smurfName'
                type='text'
                placeholder='Smurf Name'
                value={smurfName}
                onChange={handleNameChange}
                />
            <input
                className='smurfAge'
                type='text'
                placeholder='Smurf Age'
                value={smurfAge}
                onChange={handleAgeChange}
                />
            <input
                className='smurfHeight'
                type='text'
                placeholder='Smurf Height'
                value={smurfHeight}
                onChange={handleHeightChange}
                />
            <button type='submit'>Submit New Smurf</button>
        </form>
    )
}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    addSmurf
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmurfForm);