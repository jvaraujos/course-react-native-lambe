import { combineReducers, applyMiddleware, compose } from 'redux'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk'
import { createStore } from 'redux'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer,
})

const storeConfig = createStore(reducers, compose(applyMiddleware(thunk)))

export default storeConfig