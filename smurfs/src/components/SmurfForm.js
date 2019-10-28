import React, { useState } from 'react';

function SmurfForm() {
    const [smurf, addSmurf] = useState();

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='smurfName'
                type='text'
                placeholder='Smurf Name'
                value={smurf}
                
                />
        </form>
    )
}

export default SmurfForm;