import {
    SET_POST,
    ADD_COMMENT,
    CREATING_POST,
    POST_CREATED
} from "./actionTypes";
import axios from "axios";
import { setMessage } from './message'

export const addPost = post => {
    return dispatch => {
        dispatch(creatingPost())
        axios.post('/posts.json', { ...post })
            .catch(err =>
                dispatch(setMessage({
                    title: 'Erro',
                    text: err
                })))
            .then((res) => {
                dispatch(getPosts())
                dispatch(postCreated())

            })
    }
}


export const setPosts = posts => {
    return {
        type: SET_POST,
        payload: posts
    }
}
export const getPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => dispatch(setMessage({
                title: 'Erro',
                text: err
            })))
            .then((res) => {
                const rawPosts = res.data
                const posts = []
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key,
                    })
                }
                dispatch(setPosts(posts.reverse()))
            }
            )
    }
}

export const addComment = payload => {
    return (dispatch, getState) => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado!'
                }))
            })
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json?`, { comments })
                    .catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Ocorreu um erro inesperado!'
                        }))
                    })
                    .then(res => {
                        dispatch(getPosts())
                    })
            })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}