import React, { Fragment } from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TopicList from '../../components/topicList';
import FromNow from '../../components/fromnow';

export default function UserList(props) {
    let { loading } = props;
    let { recent_topics=[], recent_replies=[], avatar_url, create_at, githubUsername, score, loginname } = props.data;
    return (<Fragment>
        <Card loading={loading} className="user-details">
            <Avatar size={80} icon={<UserOutlined />} src={avatar_url} />
            <p style={{marginTop: 20}}>用户名：{loginname} 注册时间：{<FromNow date={create_at} />} 积分：{score}</p>
            <p>github:：<a href={`https://github.com/${githubUsername}`} target="_blank">https://github.com/{githubUsername}</a></p>
        </Card>
        <Card loading={loading} title="最近创建的话题" type='inner'>
            <TopicList loading={loading} data={recent_topics} />
        </Card>
        <Card loading={loading} title="最近参与的话题" type="inner">
            <TopicList loading={loading} data={recent_replies} />
        </Card>
    </Fragment>);
};