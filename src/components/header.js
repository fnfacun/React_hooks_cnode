import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Affix, Row, Col, Menu } from 'antd';
import { navs } from "../router/router_list";

export default function Header() {
    let { pathname } = useLocation();
    let activeIndex = navs.findIndex(item=>item.to === pathname);
    return (
        <Affix offsetBottom={0}>
            <Layout.Header id="header">
                <div className="wrap">
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <h1 id="logo"><Link to="/">cnode</Link></h1>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={[activeIndex + ""]}>
                                {navs.map((item, index)=>{
                                    return (<Menu.Item key={index}>
                                        <Link to={item.to}>{item.name}</Link>
                                    </Menu.Item>)
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    )
};