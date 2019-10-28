import { SMURF_START, SMURF_SUCCESS, SMURF_FAILURE } from '../actions/smurf';

const initialState = {
    isLoading: false,
    error: null,
    smurf: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: null,
                smurf: []
            }
        case SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                smurf: action.payload
            }
        case SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                smurf: []
            }
        default:
            return state;
    }
}