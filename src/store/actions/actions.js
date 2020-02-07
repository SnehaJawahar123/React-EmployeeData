import * as actionTypes from './actionTypes'
import * as data from '../../data/data'


const authStarted = () => {
    return {
        type: actionTypes.AUTH_STARTED,        
        errorMessage: null
    }
}

const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        isAuthenticated: true,
        errorMessage: null,
    }
}

const authFailed = error => {
    return {
        type: actionTypes.AUTH_FAILED,
        isAuthenticated: false,
        errorMessage: error
    }
}

export const auth =  (email, password, cb) => {
    return async dispatch => {
        dispatch(authStarted())
        if (email === data.loginCredentials['username'] && password === data.loginCredentials['password']) {
            await dispatch(authSuccess())
            cb(true)
        }
        else {
            await dispatch(authFailed("Invalid credentials"))
            cb(false)
        }
    }
}