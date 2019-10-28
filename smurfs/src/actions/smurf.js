import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export function getSmurf() {
    return dispatch => {
        dispatch({ type: SMURF_START });

        axios
            .get('/smurfs')
            .then(res => {
                console.log(res.data)
                dispatch({ type: SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(`Error: ${err}`)
                dispatch({ type: SMURF_FAILURE, payload: err.response})
            })
    }
} 