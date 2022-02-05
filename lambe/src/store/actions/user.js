import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_LOADED,
    LOADING_USER
} from "./actionTypes";
import { setMessage } from './message'

import axios from 'axios'
import { dispatchCommand } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDsgAqKmIbjob3WKa8GNNV4PxQQd5FZ3Jk'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
    }
}

export const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado!'
                }))
            })
            .then(res => {
                if (res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name
                    })
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Erro',
                                text: 'Ocorreu um erro inesperado!'
                            }))
                        })
                        .then(() => {

                            dispatch(login(user))
                            // delete user.password
                            // user.id = res.data.localId
                            // dispatch(userLogged(user))
                            // dispatch(userLoaded())
                        })
                }
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER,
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED,
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => console.log(err))
            .then((res) => {
                if (res.data.localId) {
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            delete user.password
                            user.name = res.data.name
                            dispatch(userLogged(user))
                            dispatch(userLoaded())

                        })
                }
            })
    }


}