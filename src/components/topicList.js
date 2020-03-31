import React from 'react';
import { List, Col, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TopicTag from '../components/topicTag';
import FromNow from '../components/fromnow';

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
                    <Col xs={0} md={4} className="from_now">{<FromNow data={last_reply_at} />}</Col>
                </List.Item>)
            }}
        />
    )
};

export default topicList;