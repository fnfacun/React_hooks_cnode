import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import TopicTag from '../../components/topicTag';
import FromNow from '../../components/fromnow';

export default function Details(props) {
    let { data, loading } = props;
    let { author: { loginname }, content, create_at, good, top, tab, title, visit_count } = data;
    return (
        <Card 
            bordered 
            loading={loading}
            type="inner"
            title={<Fragment>
                <h1><TopicTag tab={top? "top": (good? "good": tab)} />{title}</h1>
                <p> - 作者：<Link to={`/user/${loginname}`}>{loginname}</Link> - 创建时间：{<FromNow data={create_at} />} - 浏览人数：{visit_count}</p>
            </Fragment>}
        >
            <div dangerouslySetInnerHTML={{
                __html: content
            }}></div>
        </Card>
    );
};