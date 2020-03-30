import axios from 'axios';
import { useDispatch } from 'react-redux';

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
});

// 获取主题列表数据
function useTopicList(){
    let dispatch = useDispatch();
    return function(tab="all", page=1, limit=20, mdrender=true) {
        dispatch({
            type: "TOPIC_LOADING"
        });
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(res=>{
            dispatch({
                type: "TOPIC_LOADOVER",
                data: res.data.data
            });
        });
    };
}

export { useTopicList };