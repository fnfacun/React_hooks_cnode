import React, { useEffect, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Alert } from 'antd';
import { useTopic } from '../../store/action/index';
import Details from './details';

function Topic(){
    let { id } = useParams();
    let { goBack } = useHistory();
    let getData = useTopic();
    let { loading, data, isError, err_msg } = useSelector(state=>state.topic);
    useEffect(()=>{
        getData(id);
    },[id])
    return (<div id="topic">
        {isError?
            <Alert
                type="error"
                message={"请求出错"}
                closable={true}
                description={(<Fragment>
                    <p>{err_msg}</p>
                    <p>点击关闭按钮返回上一页</p>
                </Fragment>)}
                afterClose={()=>goBack()}
            />
        :(<Fragment>
            <Details data={data} loading={loading} />
        </Fragment>)}
    </div>)
};

export default Topic;