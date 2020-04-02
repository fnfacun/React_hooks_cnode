import axios from 'axios';
import { useDispatch } from 'react-redux';

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
});

// 获取主题列表数据
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all", page=1, limit=20, mdrender=true) {
        dispatch({
            type: "TOPICS_LOADING"
        });
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(res=>{
            dispatch({
                type: "TOPICS_LOADOVER",
                data: res.data.data
            });
        });
    };
}

// 获取主题详情
function useTopic(){
    let dispatch = useDispatch();
    return function(id) {
        dispatch({
            type: "TOPIC_LOADING"
        });
        http.get(`/topic/${id}`).then(res=>{
            dispatch({
                type: "TOPIC_LOADOVER",
                data: res.data.data
            });
        }).catch(error=>{
            dispatch({
                type: "TOPIC_ERROR",
                err_msg: error.response.data.error_msg
            })
        })
    };
}

// 获取用户详情
function useUser(){
    let dispatch = useDispatch();
    return function(loginname) {
        dispatch({
            type: "USER_LOADING"
        });
        http.get(`/user/${loginname}`).then(res=>{
            dispatch({
                type: "USER_LOADOVER",
                data: res.data.data
            });
        }).catch(err=>{
            dispatch({
                type: "USER_ERROR",
                err_msg: err.response.data.error_msg
            })
        })
    };
}

export { useTopicsList, useTopic, useUser };