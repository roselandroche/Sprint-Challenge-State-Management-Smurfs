import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export function getSmurf() {
    return dispatch => {
        dispatch({ type: SMURF_START });

        axios
            .get('http://localhost:3333/smurfs')
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

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export function addSmurf(credentials) {
    return dispatch => {
        dispatch({ type: ADD_SMURF_START });

        axios
            .post('http://localhost:3333/smurfs', credentials)
            .then(res => {
                console.log(res.data)
                dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: ADD_SMURF_FAILURE, payload: err.response})
            })
    }
}