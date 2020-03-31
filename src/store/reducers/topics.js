export default function topics(state={
    loading: true,
    data: []
}, action) {
    switch (action.type) {
        case "TOPICS_LOADING":
            return {
                loading: true,
                data: []
            }
        case "TOPICS_LOADOVER":
            return {
                loading: false,
                data: action.data
            }
        default:
            return state;
    }
};