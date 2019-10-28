import React, { useState } from 'react';

function SmurfForm() {
    const [smurfName, addSmurfName] = useState();

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='smurfName'
                type='text'
                placeholder='Smurf Name'
                value={smurfName}
                
                />
        </form>
    )
}

export default SmurfForm;