export default function topic(state={
    loading: true,
    data: {
        author: {}
    },
    isError: false,
    err_msg: ""
}, action) {
    switch (action.type) {
        case "TOPIC_LOADING":
            return {
                loading: true,
                data: {
                    author: {
                        author: {}
                    }
                },
                isError: false,
                err_msg: ""
            }
        case "TOPIC_LOADOVER":
            return {
                loading: false,
                data: action.data,
                isError: false,
                err_msg: ""
            }
        case "TOPIC_ERROR":
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