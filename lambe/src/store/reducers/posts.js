import { ADD_POST } from "../actions/actionTypes";

const initialState = {
    posts: [{
        id: Math.random(),
        nickName: "Rafael Pereira Filho",
        email: "rafaelprrflh@gmail.com",
        image: require('../../assets/imgs/fence.jpg'),
        comments: [{
            nickName: "Thiago",
            comment: "Ola Tudo bem ?"
        }, {
            nickName: "Vanessa",
            comment: "Osss bem ?"
        }]
    },
    {
        id: Math.random(),
        nickName: "Francisco Almeida",
        email: "xico@gmail.com",
        image: require('../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default: return state
    }
}
export default reducer