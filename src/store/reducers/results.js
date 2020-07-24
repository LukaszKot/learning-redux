import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    return updateObject(state, { results: state.results.filter(result => result.id != action.id) })
}

const storeResult = (state, action) => {
    return updateObject(state, { results: state.results.concat({ value: action.result, id: Date.now() }) })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: return storeResult(state, action)
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    }

    return state;
}

export default reducer