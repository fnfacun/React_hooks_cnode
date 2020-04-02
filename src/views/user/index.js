import React, { useEffect, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Alert } from 'antd';
import { useUser } from '../../store/action/index';
import UserList from './userList';

function User(){
    let { loading, data, isError, err_msg } = useSelector(state=>state.user);
    let { loginname } = useParams();
    let { goBack } = useHistory();
    let getData = useUser();
    useEffect(()=>{
        getData(loginname);
    },[loginname]);
    return (<div className="user_page">
        {isError ? <Alert
            type="error"
            message={"请求出错"}
            closable={true}
            description={(<Fragment>
                <p>{err_msg}</p>
                <p>点击关闭按钮返回上一页</p>
            </Fragment>)}
            afterClose={()=>goBack()}
        /> : <UserList data={data} loading={loading} />}
    </div>)
};

export default User;