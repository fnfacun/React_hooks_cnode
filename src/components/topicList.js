import React from 'react';
import dayjs from 'dayjs';
import { List, Col, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TopicTag from '../components/topicTag';

// 加载 fromNow
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

// 国际化语言
require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn');

// topicList
function topicList(props) {
    let { loading, data } = props;
    return (
        <List
            className="topic_list"
            loading={loading}
            dataSource={data}
            renderItem={data=>{
                let { author: { loginname, avatar_url }, last_reply_at, title, top, good, tab, id } = data;
                return (<List.Item>
                    <Col xs={24} md={20}>
                        <Link to={`/user/${loginname}`}>
                            <Avatar src={avatar_url} icon={<UserOutlined />} title={loginname} />
                        </Link>
                        <TopicTag tab={top? "top": (good? "good": tab) } />
                        <Link to={`/topic/${id}`} style={{marginLeft: "6px"}}>{title}</Link>
                    </Col>
                    <Col xs={0} md={4} className="from_now">{dayjs(last_reply_at).fromNow()}</Col>
                </List.Item>)
            }}
        />
    )
};

export default topicList;