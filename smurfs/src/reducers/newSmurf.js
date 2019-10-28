import { ADD_SMURF } from '../actions/addSmurf';

const initialState = {
    smurf: [{
        name: '',
        age: null,
        height: '',
        id: Date.now()
    }]
}

export const newSmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SMURF:
            return {
                ...state,
                smurf: [
                    ...state.smurf,
                    action.payload
                ]
            }
        default:
            return state;
    }
}