export default function user(state={
    loading: true,
    data: {},
    isError: false,
    err_msg: ""
}, action) {
    switch (action.type) {
        case "USER_LOADING":
            return {
                loading: true,
                data: {},
                isError: false,
                err_msg: ""
            }
        case "USER_LOADOVER":
            return {
                loading: false,
                data: action.data,
                isError: false,
                err_msg: ""
            }
        case "USER_ERROR":
            return {
                loading: false,
                data: {
                    author: {}
                },
                isError: true,
                err_msg: action.err_msg
            }
        default:
            return state;
    }
};