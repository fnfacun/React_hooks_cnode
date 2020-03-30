import React from 'react';
import { Tag } from 'antd';

function setTag(tab) {
    switch(tab){
        case "top":
            return <Tag color="magenta" className="topic-tag">置顶</Tag>
        case "good":
            return <Tag color="geekblue" className="topic-tag">精华</Tag>
        case "share":
            return <Tag color="green" className="topic-tag">分享</Tag>
        case "ask":
            return <Tag color="gold" className="topic-tag">问答</Tag>
        case "job":
            return <Tag color="blue" className="topic-tag">招聘</Tag>
        case "dev":
            return <Tag color="purple" className="topic-tag">测试</Tag>
        default:
            return null;
    };
}

export default function TopicTag(props){
    let { tab } = props;
    return setTag(tab);
};