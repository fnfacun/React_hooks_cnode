import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Breadcrumb } from 'antd';
import data from './data';

function About(){
    return (<Card 
        title={(
            <Breadcrumb separator={"/"}>
                <Breadcrumb.Item>
                    <Link to="/">主页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>关于</Breadcrumb.Item>
            </Breadcrumb>
        )}
        style={{
            marginTop: '10px'
        }}
        type="inner"
    >
        <div dangerouslySetInnerHTML={{
            __html: data
        }}></div>
    </Card>)
};

export default About;