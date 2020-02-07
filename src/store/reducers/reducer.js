import * as actionTypes from '../actions/actionTypes'

let initialState = {
    isAuthenticated: false,
    errorMessage: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    let {isAuthenticated, errorMessage} = action
    switch (action.type) {
        case actionTypes.AUTH_STARTED: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.AUTH_SUCCESS: {
            return {
                ...state,
                isAuthenticated,
                errorMessage,
                loading: false
            }
        }
        case actionTypes.AUTH_FAILED: {
            return {
                ...state,
                isAuthenticated,
                errorMessage,
                loading: false
            }
        }
        default: return state
    }
}

export default reducer