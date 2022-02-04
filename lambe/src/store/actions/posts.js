import {
    SET_POST,
    ADD_COMMENT,
    CREATING_POST,
    POST_CREATED
} from "./actionTypes";
import axios from "axios";

export const addPost = post => {
    return dispatch => {
        axios.post('/posts.json', { ...post })
            .catch(err => console.log(err))
            .then((res) => console.log(res.data))
    }

    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
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
            .catch(err => console.log(err))
            .then((res) => {
                const rawPosts = res.data
                const posts = []
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key,
                    })
                }
                dispatch(setPosts(posts))
            }
            )
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