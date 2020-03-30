export default function topic(state={
    loading: true,
    data: []
}, action) {
    switch (action.type) {
        case "TOPIC_LOADING":
            return {
                loading: true,
                data: []
            }
        case "TOPIC_LOADOVER":
            return {
                loading: false,
                data: action.data
            }
        default:
            return state;
    }
};